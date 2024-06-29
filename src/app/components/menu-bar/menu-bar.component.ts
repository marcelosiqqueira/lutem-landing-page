import { Component } from '@angular/core';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.scss']
})
export class MenuBarComponent {
  isMenuOpen = true;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
