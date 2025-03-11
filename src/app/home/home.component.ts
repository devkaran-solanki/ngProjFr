import { Component, AfterViewInit } from '@angular/core';
import Swiper from 'swiper'

import { HeroSectionComponent } from '../hero-section/hero-section.component';
import { FeaturedComponent } from '../featured/featured.component';
import { PopularComponent } from '../popular/popular.component';
import { JustArrievedComponent } from '../just-arrieved/just-arrieved.component';
import { DownloadComponent } from '../download/download.component';
import { FreeDelComponent } from '../free-del/free-del.component';
import { CartComponent } from '../cart/cart.component';

@Component({
  selector: 'app-home',
  standalone: true, 
  imports: [
    HeroSectionComponent, FeaturedComponent, PopularComponent, JustArrievedComponent,
    DownloadComponent, FreeDelComponent, CartComponent
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'] 
})
export class HomeComponent implements AfterViewInit {
  
  ngAfterViewInit() {
    setTimeout(() => {
      new Swiper('.category-carousel', {
        slidesPerView: 'auto',
        spaceBetween: 20,
        navigation: {
          nextEl: '.category-carousel-next',
          prevEl: '.category-carousel-prev'
        },
        breakpoints: {
          640: { slidesPerView: 3 },
          768: { slidesPerView: 4 },
          1024: { slidesPerView: 5 }
        }
      });
    }, 100);
  }
}
