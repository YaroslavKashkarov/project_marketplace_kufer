import {Component, Inject, Input, OnInit, PLATFORM_ID} from '@angular/core';
import {CommonModule, isPlatformBrowser} from '@angular/common';
import {RouterLink, RouterOutlet} from '@angular/router';
interface carouselSlide {
  imageSrc: string;
  imageAlt: string;
  description1: string;
  description2: string;
  button: string;
}

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss',
})

export class CarouselComponent implements OnInit {
  @Input() slides: carouselSlide[] = [];
  @Input() indicators: boolean = true;
  @Input() controls: boolean = true;
  @Input() buttons: string;
  @Input() description1: string;
  @Input() description2: string;
  @Input() autoSlide: boolean = true;
  @Input() slideInterval: number = 3000;
  selectedIndex: number = 0;


  constructor (
    @Inject(PLATFORM_ID) private platformId: Object,
  ) {
  }

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      if (this.autoSlide) {
        this.autoSlideImages();
      }
    }
  }

  autoSlideImages(): void {
    setTimeout((): void => {
      this.onNextClick();
      this.autoSlideImages();
    }, this.slideInterval);
  }

  selectImage(index: number): void {
    this.selectedIndex = index;
  }

  onNextClick(): void {
    if (this.selectedIndex === this.slides.length - 1) {
      this.selectedIndex = 0;
    } else {
      this.selectedIndex++;
    }
  }

  onPrevClick(): void {
    if (this.selectedIndex === 0) {
      this.selectedIndex = this.slides.length - 1;
    } else {
      this.selectedIndex--;
    }
  }
}
