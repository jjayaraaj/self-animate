import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GeneratePreviewPage } from './generate-preview';

@NgModule({
  declarations: [
    GeneratePreviewPage,
  ],
  imports: [
    IonicPageModule.forChild(GeneratePreviewPage),
  ],
})
export class GeneratePreviewPageModule {}
