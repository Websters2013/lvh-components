import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperienceHeroComponent } from './experience-hero.component';

describe('ExperienceHeroComponent', () => {
  let component: ExperienceHeroComponent;
  let fixture: ComponentFixture<ExperienceHeroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExperienceHeroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExperienceHeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
