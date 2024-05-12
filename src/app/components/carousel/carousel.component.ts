import { Component } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent {

  slideConfig = { "slidesToShow": 1, "slidesToScroll": 1, "dots": true, "infinite": true};
  
  slides = [
    {img: "./assets/foto-1-lutem.jpeg"},
    {img: "./assets/foto-2-lutem.jpeg"},
    {img: "./assets/foto-3-lutem.jpeg"},
  ];
  
  addSlide() {
    this.slides.push({img: "http://placehold.it/350x150/777777"})
  }
  
  removeSlide() {
    this.slides.length = this.slides.length - 1;
  }
  
  slickInit(e: any) {
    console.log('slick initialized');
  }
  
  breakpoint(e: any) {
    console.log('breakpoint');
  }
  
  afterChange(e: any) {
    console.log('afterChange');
  }
  
  beforeChange(e: any) {
    console.log('beforeChange');
  }
 }