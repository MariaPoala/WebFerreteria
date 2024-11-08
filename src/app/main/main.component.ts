import { Component, AfterViewInit, Inject, PLATFORM_ID, Renderer2 } from '@angular/core';
import { isPlatformBrowser, NgForOf } from '@angular/common';
import Swiper from 'swiper';

interface Card {
  id: number;
  title: string;
  description: string;
}

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [NgForOf],
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  currentIndex = 0;
  slides = [
    { img: 'https://d100mj7v0l85u5.cloudfront.net/s3fs-public/2023-04/funciones-del-jefe-de-compras-6.png' },
    { img: 'https://d100mj7v0l85u5.cloudfront.net/s3fs-public/2023-03/que-vender-en-una-ferreteria.png' },
    { img: 'https://gcf.mx/assets/images/slide1.png' }
  ];
  totalSlides = this.slides.length;

  // Define la propiedad 'dots'
  dots: number[] = Array(this.totalSlides).fill(0).map((_, i) => i);

  constructor(@Inject(PLATFORM_ID) private platformId: Object) { }

  ngAfterViewInit() {
    // Verificar si estamos en el navegador
    if (typeof window !== 'undefined') {
      new Swiper('.card__content', {
        loop: true,
        spaceBetween: 32,
        grabCursor: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
          dynamicBullets: true,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        breakpoints: {
          600: {
            slidesPerView: 2,
          },
          968: {
            slidesPerView: 3,
          },
        },
      });
    }

    if (isPlatformBrowser(this.platformId)) {



      setTimeout(() => {
        this.showSlide(this.currentIndex);
      }, 0);
    }
  }

  showSlide(index: number): void {
    if (index < 0) {
      this.currentIndex = this.totalSlides - 1;
    } else if (index >= this.totalSlides) {
      this.currentIndex = 0;
    } else {
      this.currentIndex = index;
    }

    const slides = document.querySelectorAll('.slide') as NodeListOf<HTMLElement>;
    const dots = document.querySelectorAll('.dot') as NodeListOf<HTMLElement>;

    slides.forEach((slide, i) => {
      slide.style.display = i === this.currentIndex ? 'block' : 'none';
    });

    dots.forEach((dot, i) => {
      dot.classList.toggle('active-dot', i === this.currentIndex);
    });
  }

  currentSlide(index: number): void {
    this.showSlide(index);
  }

  ;


  cards: Card[] = [
    { id: 1, title: 'Card 1', description: 'Description 1' },
    { id: 2, title: 'Card 2', description: 'Description 2' },
    { id: 3, title: 'Card 3', description: 'Description 3' },
    { id: 4, title: 'Card 4', description: 'Description 4' },
    { id: 5, title: 'Card 5', description: 'Description 5' },
    { id: 6, title: 'Card 6', description: 'Description 6' },
  ];

  currentIndexcat = 0;

  handleNext() {
    this.currentIndexcat = (this.currentIndexcat + 1) % this.cards.length;
  }

  handlePrev() {
    this.currentIndexcat = (this.currentIndexcat - 1 + this.cards.length) % this.cards.length;
  }

  getVisibleCards() {
    return this.cards.slice(this.currentIndexcat, this.currentIndexcat + 4);
  }
}
