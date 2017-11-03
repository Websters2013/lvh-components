import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PrimePopupComponent} from './prime-popup.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    PrimePopupComponent
  ],
  exports: [
    PrimePopupComponent
  ]
})
export class PrimePopupModule { }
