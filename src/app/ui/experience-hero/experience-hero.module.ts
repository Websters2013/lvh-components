import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ExperienceHeroComponent} from './experience-hero.component';

@NgModule( {
  imports: [
    CommonModule
  ],
  declarations: [
    ExperienceHeroComponent
  ],
  exports: [
    ExperienceHeroComponent
  ]
} )
export class ExperienceHeroModule { }
