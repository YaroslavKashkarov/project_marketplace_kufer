import { ProductServiceService } from './../../category/product-service.service';

import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import {OverlayModule} from '@angular/cdk/overlay';
import { ScrollStrategy, ScrollStrategyOptions } from '@angular/cdk/overlay';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { debounce, filter, interval, tap } from 'rxjs';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { HighlightKeywordsPipe } from '../../../pipes/highlight-keywords.pipe';
import { MatDialog } from '@angular/material/dialog';
import { DialogService } from '../../services/dialog.service';

@Component({
  selector: 'app-search-field',
  standalone: true,
  imports: [CommonModule, OverlayModule, FormsModule, ReactiveFormsModule, HighlightKeywordsPipe],
  templateUrl: './search-field.component.html',
  styleUrl: './search-field.component.scss'
})
export class SearchFieldComponent implements OnInit{

  searchInput = new FormControl('');
  scrollStrategy: ScrollStrategy;
  filters: any = {};
  keywords: string;
  isExpanded: boolean = false;
  options: string[];
  isSearchResultPage: boolean = false;

  constructor(
    private readonly sso: ScrollStrategyOptions, 
    private productService: ProductServiceService,
    private router: Router,
    public dialog: MatDialog, 
    private dialogService: DialogService,
    private route: ActivatedRoute
  ) {
    this.scrollStrategy = sso.reposition();
  }

  ngOnInit(): void {
    this.searchInput.valueChanges
    .pipe(
      tap(() => this.isExpanded = false),
      debounce((v) => interval(500))
    )    
    .subscribe(() => {      
      this.processData();
    });

    this.router.events
      .pipe(
        filter((event): event is NavigationEnd => event instanceof NavigationEnd)
      )
      .subscribe((event: NavigationEnd) => {
        this.isSearchResultPage = event.url.startsWith('/home/search-result');
      });

    this.route.queryParamMap.subscribe(params => {
      this.filters = {};

      if (params.keys){
        params.keys.forEach(key => {
          this.filters[key] = key === 'negotiable' ? Boolean(params.get(key)) : params.get(key);
        });
      }
    })
  }

  processData(isExpandedAfter = true) {
    const keywords = this.searchInput.value;

    if (keywords){
      this.keywords = keywords;
      this.productService.getProductTitlesByKeyword(this.keywords).subscribe(
        res => {
          this.options = res;
          if (this.options?.length > 0) {
            this.isExpanded = isExpandedAfter;
          } else {
            this.router.navigate(['home/no-search-results']);
          }
        }
      )
    } else {
      this.options = []
    }
  }

  onOptionSelect(option: string){
    this.filters = {
      title: option,
      sort: 'by_newest'
    }
    this.searchInput.patchValue(option, {
      emitEvent: false
    });
    this.processData(false);
    this.router.navigate(['home/search-result'], {queryParams: this.filters});
    this.isExpanded = false;
  }

  onFocus() {
    console.log('test');
    this.isExpanded = !this.isExpanded
  }

  onBlur() {
    setTimeout(() => {
      this.isExpanded = false;
    }, 200); 
  }

  openFilter(event: Event): void {
	  this.dialogService.openFilterDialog(this.filters);
  }

  clearInput(): void{
    this.onOptionSelect('')
  }

}
