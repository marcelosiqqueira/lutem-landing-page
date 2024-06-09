import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselTitleComponent } from './carousel-title.component';

describe('CarouselTitleComponent', () => {
  let component: CarouselTitleComponent;
  let fixture: ComponentFixture<CarouselTitleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CarouselTitleComponent]
    });
    fixture = TestBed.createComponent(CarouselTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
