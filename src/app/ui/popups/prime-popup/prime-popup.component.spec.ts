import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimePopupComponent } from './prime-popup.component';

describe('PrimePopupComponent', () => {
  let component: PrimePopupComponent;
  let fixture: ComponentFixture<PrimePopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrimePopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimePopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
