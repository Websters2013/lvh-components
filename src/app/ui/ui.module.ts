import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {UiComponent} from "./ui.component";
import {HeaderModule} from "./header/header.module";


@NgModule({
  imports: [
    CommonModule,
      HeaderModule
  ],
  declarations: [
    UiComponent
  ],
  exports: [
    UiComponent
  ]
})
export class UiModule { }
