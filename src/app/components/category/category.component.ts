import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ActivatedRoute} from "@angular/router";
import {Product} from "./product";
import {ProductServiceService} from "./product-service.service";
import {ProductComponent} from "./product/product.component";
import {MatInputModule} from "@angular/material/input";
import {MatSelectModule} from "@angular/material/select";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [CommonModule, ProductComponent, MatInputModule, MatSelectModule, FormsModule],
  templateUrl: './category.component.html',
  styleUrl: './category.component.scss'
})
export class CategoryComponent implements OnInit {
  constructor (
    private route: ActivatedRoute,
    private productService: ProductServiceService
  ) {
  }

  category: string;
  products: Product[];
  productsToDisplay: number = 8;
  selectedSortOption: string = '';

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const category = params.get('category');
      if (category) {
        this.category = category;
      }
      this.products = this.productService.getProductsByCategory(this.category);
    });

  }

  onMoreClick(): void {
    // Increase the number of items to display by a certain amount (e.g., 3 more items)
    this.productsToDisplay += 4;
  }

  selectOption(sortOption: string) {
    // console.log(sortOption);
    this.selectedSortOption = sortOption;
  }

  public sortProductsDesc(): void {
    this.products = this.products.sort((a, b) => a.price - b.price);
  }

  public sortProductsAsc() {
    this.products = this.products.sort((a, b) => b.price - a.price);
  }

  onSortChange($event: Event) {
    const selectedValue = ($event.target as HTMLSelectElement).value;

    if (selectedValue === 'Price Up') {
      this.sortProductsDesc();
    } else if (selectedValue === 'Price Down') {
      this.sortProductsAsc();
    }
  }
}
