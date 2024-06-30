import { Component, OnInit, HostListener } from '@angular/core';
import * as Hammer from 'hammerjs';


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
      name: 'Venha Participar!',
      description: 'Diversão garantida na Rua Tristão de Castro, 102. Venha jogar!'
    },
    {
      image: 'assets/carousel_images/foto-3-lutem.jpeg',
      name: 'Hora do Treino!',
      description: 'Foco e dedicação em cada movimento.'
    },
    {
      image: 'assets/carousel_images/foto-geral.jpeg',
      name: '42° Torneio Lutem',
      description: '1° Torneio do Ano de 2024 e inauguração da nova sede da LUTEM! 🎉'
    },
    {
      image: 'assets/carousel_images/imagem-lutem-campeonato-1.jpeg',
      name: '43° Torneio Lutem',
      description: 'Os Melhores do Rating A: Finalistas no pódio.'
    },
    {
      image: 'assets/carousel_images/premios-tremendao.jpeg',
      name: 'Brindes no 46° Torneio da Lutem',
      description: 'Brindes do TREMENDÃO para engrandecer nosso Torneio.'
    },
    {
      image: 'assets/carousel_images/rating-c.jpeg',
      name: '44° Torneio Lutem',
      description: 'Os Melhores do Rating C: Finalistas no pódio.'
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

    const carouselContainer = document.getElementById('carousel-container');
    if (carouselContainer) {
      const hammer = new Hammer(carouselContainer);
      hammer.on('swipeleft', () => this.next());
      hammer.on('swiperight', () => this.prev());
    }
  }

}