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
      image: 'assets/carousel_images/foto-2-lutem.jpeg',
      name: '1',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      image: 'assets/carousel_images/foto-3-lutem.jpeg',
      name: '2',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elitt.'
    },
    {
      image: 'assets/carousel_images/foto-geral.jpeg',
      name: '3',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elittt.'
    },
    {
      image: 'assets/carousel_images/imagem-lutem-campeonato-1.jpeg',
      name: '4',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      image: 'assets/carousel_images/premios-tremendao.jpeg',
      name: '5',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elitt.'
    },
    {
      image: 'assets/carousel_images/rating-c.jpeg',
      name: '6',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elittt.'
    }
  ];

  updateDisplayedCards(startIndex = 0, endIndex = this.cardsPerSlide) {
      this.displayedCards = this.cards.slice(startIndex, endIndex);
  }
  
  next() {
  
    if( (this.activeIndex + this.cardsPerSlide + 1) > this.cards.length) {
      
      this.activeIndex = this.cardsPerSlide - 1;
      this.updateDisplayedCards(0, this.cardsPerSlide);
      return;
    }

    this.activeIndex = (this.activeIndex + 1);
    this.updateDisplayedCards(this.activeIndex, this.activeIndex + this.cardsPerSlide);
  }

  prev() {

    if( (this.activeIndex - 1) < (  this.cardsPerSlide - 1) )
    {

      this.activeIndex = (this.cards.length - this.cardsPerSlide);
      this.updateDisplayedCards(this.activeIndex, this.cards.length);
      return;
    }

    this.activeIndex = (this.activeIndex - 1);
    this.updateDisplayedCards(this.activeIndex - this.cardsPerSlide + 1, this.activeIndex + 1);
  }

  setCardsPerSlide() {
    this.cardsPerSlide = window.innerWidth > 768 ? 3 : 1;
  }

  setActiveIndex(index: number) {
    this.activeIndex = index;
  }

  ngOnInit(): void {
    this.setCardsPerSlide();
    this.setActiveIndex(this.cardsPerSlide - 1);
    window.addEventListener('resize', () => this.updateDisplayedCards());

    this.updateDisplayedCards();
  }

}