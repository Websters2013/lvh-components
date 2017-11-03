import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiComponent } from './ui.component';
import { HeaderModule } from './header/header.module';
import { FooterModule } from './footer/footer.module';
import { MatDialogModule } from '@angular/material';
import { PrimePopupComponent } from './popups/prime-popup/prime-popup.component';
import { PrimePopupModule } from './popups/prime-popup/prime-popup.module';
import { ExperienceHeroModule } from './experience-hero/experience-hero.module';
import { GalleryModule } from './gallery/gallery.module';
import { TabsModule } from './tabs/tabs.module';
import { FilterModule } from './filter/filter.module';
import { PlaceInfoModule } from './place-info/place-info.module';
import { ServicesModule } from './services/services.module';
import { AboutModule } from './about/about.module';

@NgModule({
  imports: [
    CommonModule,
    HeaderModule,
    FooterModule,
    ExperienceHeroModule,
    GalleryModule,
    MatDialogModule,
    TabsModule,
    PrimePopupModule,
    FilterModule,
    PlaceInfoModule,
    ServicesModule,
    AboutModule
  ],
  declarations: [
    UiComponent
  ],
  exports: [
    UiComponent
  ],
  entryComponents: [
    PrimePopupComponent
  ]
})
export class UiModule { }
