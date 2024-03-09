import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { HeaderComponent } from './components/home-page/header/header.component';
import { MainComponent } from './components/home-page/main/main.component';
import { FooterComponent } from './components/home-page/footer/footer.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { NavbarComponent } from './components/home-page/main/navbar/navbar.component';
import { FavoriteComponent } from './components/favorite/favorite.component';
import { ProfileComponent } from './components/profile/profile/profile.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports:
    [CommonModule,
      RouterOutlet,
      HomePageComponent,
      HeaderComponent,
      MainComponent,
      FooterComponent, ProductCardComponent, NavbarComponent, FavoriteComponent, ProfileComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'app_marketplace_kufer';
}
