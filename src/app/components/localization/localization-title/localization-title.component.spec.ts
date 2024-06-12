import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalizationTitleComponent } from './localization-title.component';

describe('LocalizationTitleComponent', () => {
  let component: LocalizationTitleComponent;
  let fixture: ComponentFixture<LocalizationTitleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LocalizationTitleComponent]
    });
    fixture = TestBed.createComponent(LocalizationTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
