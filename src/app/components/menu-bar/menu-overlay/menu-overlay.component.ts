import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-menu-overlay',
  templateUrl: './menu-overlay.component.html',
  styleUrls: ['./menu-overlay.component.scss']
})
export class MenuOverlayComponent implements OnDestroy{

  @Input() isMenuOpen = false;
  @Output() isMenuClosed: EventEmitter<boolean> = new EventEmitter<boolean>();

  closeMenu() {
    this.isMenuClosed.emit(true);
  }

  preventScroll = (event: TouchEvent) => {
    event.preventDefault();
  };

  ngOnDestroy() {
    document.body.style.overflow = '';
  }

  scrollToSection(sectionId: string) {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    this.isMenuClosed.emit(true);
  }
}
