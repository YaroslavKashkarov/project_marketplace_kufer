import { Component, OnInit } from '@angular/core';
import { CarouselComponent } from './carousel/carousel.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { HoverDetailDirective } from '../../directives/hover-detail.directive';

interface Item {
  img: string;
  price: string;
  description: string;
  brand: string;
  negotiable: string;
  exchange: string;
  location: string;
}

@Component({
  selector: 'app-home-page',
  providers: [CarouselComponent],
  standalone: true,
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
  imports: [
    RouterOutlet,
    CommonModule,
    CarouselComponent,
    NavbarComponent,
    MatPaginatorModule,
    HoverDetailDirective,
  ],
})
export class HomePageComponent implements OnInit {
  pageSize = 8;
  pageIndex = 0;

  hidePageSize = false;
  showPageSizeOptions = true;
  showFirstLastButtons = true;
  disabled = false;
  pagedPopularItems: Item[] = [];
  pagedLatestItems: Item[] = [];

  pageEvent: PageEvent;

  popularItems: Item[] = [
    {
      img: 'assets/img/popular-items/img.png',
      price: '1 000 $',
      description: 'A popular model of a modern bicycle 24d',
      brand: 'Leon',
      negotiable: 'Yes',
      exchange: 'Yes',
      location: 'Kyiv city',
    },
    {
      img: 'assets/img/popular-items/img_1.png',
      price: '1 300 $',
      description: 'Mountain bicycle for sale. Well-maintained mountain bike, 26d',
      brand: 'Leon',
      negotiable: 'Yes',
      exchange: 'Yes',
      location: 'Kyiv city',
    },
    {
      img: 'assets/img/popular-items/img_2.png',
      price: '950 $',
      description: 'City commuter bicycle. 28d',
      brand: 'Leon',
      negotiable: 'Yes',
      exchange: 'Yes',
      location: 'Kyiv city',
    },
    {
      img: 'assets/img/popular-items/img_3.png',
      price: '900 $',
      description: 'Speedy road bicycle. 28d',
      brand: 'Leon',
      negotiable: 'Yes',
      exchange: 'Yes',
      location: 'Kyiv city',
    },
    {
      img: 'assets/img/popular-items/img.png',
      price: '1 000 $',
      description: 'A popular model of a modern bicycle 24d',
      brand: 'Leon',
      negotiable: 'Yes',
      exchange: 'Yes',
      location: 'Kyiv city',
    },
    {
      img: 'assets/img/popular-items/img_1.png',
      price: '1 300 $',
      description: 'Mountain bicycle for sale. Well-maintained mountain bike, 26d',
      brand: 'Leon',
      negotiable: 'Yes',
      exchange: 'Yes',
      location: 'Kyiv city',
    },
    {
      img: 'assets/img/popular-items/img.png',
      price: '1 000 $',
      description: 'A popular model of a modern bicycle 24d',
      brand: 'Leon',
      negotiable: 'Yes',
      exchange: 'Yes',
      location: 'Kyiv city',
    },
    {
      img: 'assets/img/popular-items/img_1.png',
      price: '1 300 $',
      description: 'Mountain bicycle for sale. Well-maintained mountain bike, 26d',
      brand: 'Leon',
      negotiable: 'Yes',
      exchange: 'Yes',
      location: 'Kyiv city',
    },
    {
      img: 'assets/img/popular-items/img.png',
      price: '5 000 $',
      description: 'A popular model of a modern bicycle 24d',
      brand: 'Leon',
      negotiable: 'Yes',
      exchange: 'Yes',
      location: 'Kyiv city',
    },
    {
      img: 'assets/img/popular-items/img_2.png',
      price: '1 800 $',
      description: 'Mountain bicycle for sale. Well-maintained mountain bike, 26d',
      brand: 'Leon',
      negotiable: 'Yes',
      exchange: 'Yes',
      location: 'Kyiv city',
    },
    {
      img: 'assets/img/popular-items/img_1.png',
      price: '1 950 $',
      description: 'City commuter bicycle. 28d',
      brand: 'Leon',
      negotiable: 'Yes',
      exchange: 'Yes',
      location: 'Kyiv city',
    },
    {
      img: 'assets/img/popular-items/img_1.png',
      price: '900 $',
      description: 'Speedy road bicycle. 28d',
      brand: 'Leon',
      negotiable: 'Yes',
      exchange: 'Yes',
      location: 'Kyiv city',
    },
    {
      img: 'assets/img/popular-items/img.png',
      price: '1 000 $',
      description: 'A popular model of a modern bicycle 24d',
      brand: 'Leon',
      negotiable: 'Yes',
      exchange: 'Yes',
      location: 'Kyiv city',
    },
    {
      img: 'assets/img/popular-items/img_3.png',
      price: '1 300 $',
      description: 'Mountain bicycle for sale',
      brand: 'Leon',
      negotiable: 'Yes',
      exchange: 'Yes',
      location: 'Kyiv city',
    },
    {
      img: 'assets/img/popular-items/img.png',
      price: '1 000 $',
      description: 'A popular model of a modern bicycle 24d',
      brand: 'Leon',
      negotiable: 'Yes',
      exchange: 'Yes',
      location: 'Kyiv city',
    },
    {
      img: 'assets/img/popular-items/img_1.png',
      price: '1 300 $',
      description: 'Mountain bicycle for sale. Well-maintained mountain bike, 26d',
      brand: 'Leon',
      negotiable: 'Yes',
      exchange: 'Yes',
      location: 'Kyiv city',
    },
    {
      img: 'assets/img/popular-items/img_1.png',
      price: '900 $',
      description: 'Speedy road bicycle. 28d',
      brand: 'Leon',
      negotiable: 'Yes',
      exchange: 'Yes',
      location: 'Kyiv city',
    },
    {
      img: 'assets/img/popular-items/img.png',
      price: '1 000 $',
      description: 'A popular model of a modern bicycle 24d',
      brand: 'Leon',
      negotiable: 'Yes',
      exchange: 'Yes',
      location: 'Kyiv city',
    },
    {
      img: 'assets/img/popular-items/img_3.png',
      price: '1 300 $',
      description: 'Mountain bicycle for sale',
      brand: 'Leon',
      negotiable: 'Yes',
      exchange: 'Yes',
      location: 'Kyiv city',
    },
    {
      img: 'assets/img/popular-items/img.png',
      price: '1 000 $',
      description: 'A popular model of a modern bicycle 24d',
      brand: 'Leon',
      negotiable: 'Yes',
      exchange: 'Yes',
      location: 'Kyiv city',
    },
    {
      img: 'assets/img/popular-items/img_1.png',
      price: '1 300 $',
      description: 'Mountain bicycle for sale. Well-maintained mountain bike, 26d',
      brand: 'Leon',
      negotiable: 'Yes',
      exchange: 'Yes',
      location: 'Kyiv city',
    },
    {
      img: 'assets/img/popular-items/img.png',
      price: '5 000 $',
      description: 'A popular model of a modern bicycle 24d',
      brand: 'Leon',
      negotiable: 'Yes',
      exchange: 'Yes',
      location: 'Kyiv city',
    },
    {
      img: 'assets/img/popular-items/img_2.png',
      price: '1 800 $',
      description: 'Mountain bicycle for sale. Well-maintained mountain bike, 26d',
      brand: 'Leon',
      negotiable: 'Yes',
      exchange: 'Yes',
      location: 'Kyiv city',
    },
    {
      img: 'assets/img/popular-items/img_1.png',
      price: '1 950 $',
      description: 'City commuter bicycle. 28d',
      brand: 'Leon',
      negotiable: 'Yes',
      exchange: 'Yes',
      location: 'Kyiv city',
    },
  ];

  popularLatestItems: Item[] = [
    {
      img: 'assets/img/popular-items/img.png',
      price: '1 000 $',
      description: 'A popular model of a modern bicycle 24d',
      brand: 'Leon',
      negotiable: 'Yes',
      exchange: 'Yes',
      location: 'Kyiv city',
    },
    {
      img: 'assets/img/popular-items/img_1.png',
      price: '1 300 $',
      description: 'Mountain bicycle for sale. Well-maintained mountain bike, 26d',
      brand: 'Leon',
      negotiable: 'Yes',
      exchange: 'Yes',
      location: 'Kyiv city',
    },
    {
      img: 'assets/img/popular-items/img_2.png',
      price: '950 $',
      description: 'City commuter bicycle. 28d',
      brand: 'Leon',
      negotiable: 'Yes',
      exchange: 'Yes',
      location: 'Kyiv city',
    },
    {
      img: 'assets/img/popular-items/img_3.png',
      price: '900 $',
      description: 'Speedy road bicycle. 28d',
      brand: 'Leon',
      negotiable: 'Yes',
      exchange: 'Yes',
      location: 'Kyiv city',
    },
    {
      img: 'assets/img/popular-items/img.png',
      price: '5 000 $',
      description: 'A popular model of a modern bicycle 24d',
      brand: 'Leon',
      negotiable: 'Yes',
      exchange: 'Yes',
      location: 'Kyiv city',
    },
    {
      img: 'assets/img/popular-items/img_2.png',
      price: '1 800 $',
      description: 'Mountain bicycle for sale. Well-maintained mountain bike, 26d',
      brand: 'Leon',
      negotiable: 'Yes',
      exchange: 'Yes',
      location: 'Kyiv city',
    },
    {
      img: 'assets/img/popular-items/img_1.png',
      price: '1 950 $',
      description: 'City commuter bicycle. 28d',
      brand: 'Leon',
      negotiable: 'Yes',
      exchange: 'Yes',
      location: 'Kyiv city',
    },
    {
      img: 'assets/img/popular-items/img_1.png',
      price: '900 $',
      description: 'Speedy road bicycle. 28d',
      brand: 'Leon',
      negotiable: 'Yes',
      exchange: 'Yes',
      location: 'Kyiv city',
    },
    {
      img: 'assets/img/popular-items/img_1.png',
      price: '1 950 $',
      description: 'City commuter bicycle. 28d',
      brand: 'Leon',
      negotiable: 'Yes',
      exchange: 'Yes',
      location: 'Kyiv city',
    },
    {
      img: 'assets/img/popular-items/img_1.png',
      price: '900 $',
      description: 'Speedy road bicycle. 28d',
      brand: 'Leon',
      negotiable: 'Yes',
      exchange: 'Yes',
      location: 'Kyiv city',
    },
    {
      img: 'assets/img/popular-items/img.png',
      price: '5 000 $',
      description: 'A popular model of a modern bicycle 24d',
      brand: 'Leon',
      negotiable: 'Yes',
      exchange: 'Yes',
      location: 'Kyiv city',
    },
    {
      img: 'assets/img/popular-items/img_2.png',
      price: '1 800 $',
      description: 'Mountain bicycle for sale. Well-maintained mountain bike, 26d',
      brand: 'Leon',
      negotiable: 'Yes',
      exchange: 'Yes',
      location: 'Kyiv city',
    },
  ];

  slides: any = [
    {
      imageSrc: 'assets/img/carousel/slide.png',
      imageAlt: 'slide',
      description1: 'Your Perfect Bicycle Awaits!',
      description2: 'Find a bicycle for every path. Quality and style in one place',
      button: 'Explore Bicycle',
    },
    {
      imageSrc: 'assets/img/carousel/slide_1.png',
      imageAlt: 'slide1',
      description1: 'Style and Comfort on Every Ride!',
      description2:
        'Enhance your look and elevate your rides with our selection of accessories and apparel',
      button: 'Browse Accessories',
    },
    {
      imageSrc: 'assets/img/carousel/slide_2.png',
      imageAlt: 'slide2',
      description1: 'Keep Your Bicycle in Perfect Condition!',
      description2: 'Parts, tools, and accessories for effective maintenance and repair',
      button: 'Shop Parts',
    },
  ];

  constructor(public carousel: CarouselComponent) {}

  ngOnInit(): void {
    this.carousel.autoSlide = true;
    this.setPagedItems();
    this.setPagedItemsLatest();
  }
  handlePageEvent(e: PageEvent) {
    this.pageEvent = e;
    this.pageSize = e.pageSize;
    this.pageIndex = e.pageIndex;
    this.setPagedItems();
  }

  handlePageEventLatest(e: PageEvent) {
    this.pageEvent = e;
    this.pageSize = e.pageSize;
    this.pageIndex = e.pageIndex;
    this.setPagedItemsLatest();
  }

  setPagedItems() {
    const startIndex = this.pageIndex * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    this.pagedPopularItems = this.popularItems.slice(startIndex, endIndex);
  }

  setPagedItemsLatest() {
    const startIndex = this.pageIndex * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    this.pagedLatestItems = this.popularLatestItems.slice(startIndex, endIndex);
  }
}
