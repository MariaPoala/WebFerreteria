import { CommonModule, isPlatformBrowser, NgForOf } from '@angular/common';
import { Component, AfterViewInit, ViewChild, ElementRef, Inject, PLATFORM_ID } from '@angular/core';
import Swiper from 'swiper';

interface Card {
  id: number;
  title: string;
  description: string;
}


@Component({
  selector: 'app-nosotros',
  standalone: true,
  imports: [CommonModule, NgForOf],
  templateUrl: './nosotros.component.html',
  styleUrls: ['./nosotros.component.css']
})


export class NosotrosComponent {
  cards: Card[] = [
    { id: 1, title: 'Card 1', description: 'Description 1' },
    { id: 2, title: 'Card 2', description: 'Description 2' },
    { id: 3, title: 'Card 3', description: 'Description 3' },
    { id: 4, title: 'Card 4', description: 'Description 4' },
    { id: 5, title: 'Card 5', description: 'Description 5' },
    { id: 6, title: 'Card 6', description: 'Description 6' },
  ];

  currentIndex = 0;

  handleNext() {
    this.currentIndex = (this.currentIndex + 1) % this.cards.length;
  }

  handlePrev() {
    this.currentIndex = (this.currentIndex - 1 + this.cards.length) % this.cards.length;
  }

  getVisibleCards() {
    return this.cards.slice(this.currentIndex, this.currentIndex + 3);
  }
}

