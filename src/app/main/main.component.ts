import { Component, AfterViewInit, Inject, PLATFORM_ID  } from '@angular/core';
import { isPlatformBrowser, NgForOf } from '@angular/common';

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
    { img: 'https://i.blogs.es/0ca9a6/aa/1366_2000.jpeg' },
    { img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR__zJOFi3ef7eGRIlVWo2DKdUXKrCq8dBwtQ&s' },
    { img: 'https://i.pinimg.com/474x/d7/47/f7/d747f70ce52b0df12c1542b280fa8d76.jpg' }
  ];
  totalSlides = this.slides.length;
  
  // Define la propiedad 'dots'
  dots: number[] = Array(this.totalSlides).fill(0).map((_, i) => i);

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngAfterViewInit() {
    // Verificar si estamos en el navegador
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
  // currentIndex = 0;
  // slides = document.querySelectorAll('.slide');
  // dots = document.querySelectorAll('.dot');
  // totalSlides = this.slides.length;

  // showSlide(index: any): void {
  //   if (index < 0) {
  //     this.currentIndex = this.totalSlides - 1;
  //   } else if (index >= this.totalSlides) {
  //     this.currentIndex = 0;
  //   } else {
  //     this.currentIndex = index;
  //   }
  //   this.slides.forEach((slide, i) => {
  //     const isCurrent = i === this.currentIndex;
  //     const scaleFactor = isCurrent ? 1: 0.8;
  //     const transformValue = isCurrent ? 'scale(1)' : 'scale(0.8)';
  //     const widthValue = isCurrent ? '100%': '80%';

  //     slide.style.transform = transformValue;
  //     slide.style.widthValue = widthValue; 
  //     this.dots[i].classList.toggle('active-dot', isCurrent);
  //   });
  //   const translateValue = -this.currentIndex * 100 + '%';
  //   document.querySelector('.slider').style.transform = 'translateX(' + translateValue + ')';

  // }
}
