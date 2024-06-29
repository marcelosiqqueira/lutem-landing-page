import { Component, Input, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-overlay',
  templateUrl: './menu-overlay.component.html',
  styleUrls: ['./menu-overlay.component.scss']
})
export class MenuOverlayComponent implements OnInit, OnDestroy{
  @Input() isMenuOpen = false;

  preventScroll = (event: TouchEvent) => {
    event.preventDefault();
  }

  ngOnInit() {
    
  }

  ngOnDestroy() {
    document.body.style.overflow = '';
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;

    if (this.isMenuOpen) {
      document.body.style.overflow = 'hidden';
      document.body.addEventListener('touchmove', this.preventScroll, { passive: false });
    } else {
      document.body.style.overflow = '';
      document.body.removeEventListener('touchmove', this.preventScroll);
    }
  }

  scrollToSection(sectionId: string) {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    this.isMenuOpen = false; // Close the menu after clicking
  }
}
