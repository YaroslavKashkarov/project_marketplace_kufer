import {Component, OnDestroy, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FilterComponent} from './filter/filter.component';
import {CreateAnItemComponent} from './create-an-item/create-an-item.component';
import {ShoppingCartComponent} from './shopping-cart/shopping-cart.component';
import {ActivatedRoute, RouterLink} from '@angular/router';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import {AuthenticationService} from '../services/authentication.service';
import {DialogService} from '../services/dialog.service';
import {IUser} from '../../../core/interfaces/user.interface';
import {Subscription} from 'rxjs';
import {UserIconComponent} from './user-icon/user-icon.component';
import {SearchFieldComponent} from './search-field/search-field.component';
import {TranslateService} from '@ngx-translate/core';
import {FavoriteComponent} from "../favorite/favorite.component";
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule,
    FilterComponent,
    CreateAnItemComponent,
    ShoppingCartComponent,
    RouterLink,
    MatDialogModule,
    UserIconComponent,
    SearchFieldComponent,
    FavoriteComponent
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit, OnDestroy {

  currentUser: IUser | null = null;
  userSubscription: Subscription | null = null;
  filters: any = {};
  isCreateItemVisible: boolean = false;

  constructor (
    public dialog: MatDialog,
    private dialogService: DialogService,
    private authService: AuthenticationService,
    private route: ActivatedRoute
  ) {

    // Subscribe to user changes
    this.userSubscription = this.authService.$currentUser.subscribe(user => {
      this.currentUser = user;
    });
  }

  // Initialising a component
  ngOnInit(): void {
    this.route.queryParamMap.subscribe(params => {
      this.filters = {};
      params.keys.forEach(key => {
        this.filters[key] = key === 'negotiable' ? Boolean(params.get(key)) : params.get(key);
      });
    });
  }

  // Switching block visibility to create elements
  isCreateItem(): void {
    this.isCreateItemVisible = !this.isCreateItemVisible;
  }

  // Opening the filter
  openFilter(event: Event): void {
    this.dialogService.openFilterDialog(this.filters);
  }

  // Opening the Authentication Dialogue
  openAuthDialog(): void {
    this.dialogService.openAuthDialog();
  }

  // Clearing a subscription when a component is destroyed
  ngOnDestroy(): void {
    if (this.userSubscription) {
      this.userSubscription.unsubscribe();
    }
  }
}
