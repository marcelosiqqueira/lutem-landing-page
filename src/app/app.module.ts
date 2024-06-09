import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { MenuBarComponent } from './components/menu-bar/menu-bar.component';
import { InitialCardComponent } from './components/initial-card/initial-card.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { CarouselCardComponent } from './components/carousel-card/carousel-card.component';
import { CarouselTitleComponent } from './components/carousel-title/carousel-title.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuBarComponent,
    InitialCardComponent,
    CarouselComponent,
    CarouselCardComponent,
    CarouselTitleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SlickCarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
