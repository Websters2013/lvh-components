import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlaceInfoComponent } from './place-info.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    PlaceInfoComponent
  ],
  exports: [
    PlaceInfoComponent
  ]
})
export class PlaceInfoModule { }
