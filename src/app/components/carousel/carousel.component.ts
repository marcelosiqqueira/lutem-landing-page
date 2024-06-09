import {
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { Subscription, timer } from 'rxjs';

interface Card {
  image: string;
  name: string;
  description: string;
}

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {

  displayedCards: Card[] = [];
  activeIndex = 0;
  cardsPerSlide = 1;

  cards: Card[] = [
    {
      image: 'assets/carousel_images/foto-1-lutem.jpeg',
      name: 'Sam Walton',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      image: 'assets/carousel_images/foto-2-lutem.jpeg',
      name: 'Richard Bond',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elitt.'
    },
    {
      image: 'assets/carousel_images/foto-3-lutem.jpeg',
      name: 'Laura Haggis',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elittt.'
    },

  ];

  updateDisplayedCards() {
    this.cardsPerSlide = window.innerWidth > 768 ? 3 : 1;
    this.displayedCards = this.cards.slice(this.activeIndex, this.activeIndex + this.cardsPerSlide);
    console.log(this.cardsPerSlide);
    console.log(this.displayedCards);
  }

  ngOnInit(): void {
    this.updateDisplayedCards();
    window.addEventListener('resize', () => this.updateDisplayedCards());
  }
  
  next() {
    this.activeIndex = (this.activeIndex + this.cardsPerSlide) % this.cards.length;
    this.updateDisplayedCards();
  }

  prev() {
    this.activeIndex = (this.activeIndex - this.cardsPerSlide + this.cards.length) % this.cards.length;
    this.updateDisplayedCards();
  }


}