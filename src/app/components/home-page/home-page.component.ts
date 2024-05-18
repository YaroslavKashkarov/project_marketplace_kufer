import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CarouselComponent} from './carousel/carousel.component';
import {NavbarComponent} from "../navbar/navbar.component";
import { RouterOutlet } from '@angular/router';

@Component({
	selector: 'app-home-page',
	providers: [CarouselComponent],
	standalone: true,
	templateUrl: './home-page.component.html',
	styleUrl: './home-page.component.scss',
	imports: [      RouterOutlet,
		CommonModule, CarouselComponent, NavbarComponent]
})


export class HomePageComponent implements OnInit {
	images: any = [
		{
			imageSrc:
				'assets/img/carousel/slide.png',
			imageAlt: 'slide',
			description: 'Your Perfect Bicycle Awaits!' + 'Find a bicycle for every' +
				'path. Quality and style in one place',
			titleButton: 'Explore Bicycle',
		},
		{
			imageSrc:
				'assets/img/carousel/slide_1.png',
			imageAlt: 'slide1',
			description: 'Style and Comfort on Every Ride!' + 'Enhance your look' +
				' and + elevate your rides with our selection of accessories and' +
				'apparel',
			titleButton: 'Browse Accessories',
		},
		{
			imageSrc:
				'assets/img/carousel/slide_2.png',
			imageAlt: 'slide2',
			title: 'Keep Your Bicycle in Perfect Condition!' + 'Parts, tools,' +
				'and accessories for effective maintenance and repair',
			titleButton: 'Shop Parts',
		},
	];

	constructor (public carousel: CarouselComponent) {
	}

	ngOnInit(): void {
		this.carousel.autoSlide = true;
	}
}
