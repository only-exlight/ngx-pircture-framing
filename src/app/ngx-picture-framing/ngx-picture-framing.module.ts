import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ScrimComponent } from './components/scrim/scrim.component';
import { PictureFrameComponent } from './components/picture-frame/picture-frame.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ScrimComponent,
    PictureFrameComponent
  ]
})
export class NgxPictureFramingModule {
  static forRoot(): ModuleWithProviders {
    return { ngModule: NgxPictureFramingModule, providers: [] };
  }
}
