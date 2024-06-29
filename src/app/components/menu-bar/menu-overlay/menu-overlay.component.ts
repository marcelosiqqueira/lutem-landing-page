import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-menu-overlay',
  templateUrl: './menu-overlay.component.html',
  styleUrls: ['./menu-overlay.component.scss']
})
export class MenuOverlayComponent {
  @Input() isMenuOpen = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  scrollToSection(sectionId: string) {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    this.isMenuOpen = false; // Close the menu after clicking
  }
}
