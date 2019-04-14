import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TemplateVideoPage } from './template-video';

@NgModule({
  declarations: [
    TemplateVideoPage,
  ],
  imports: [
    IonicPageModule.forChild(TemplateVideoPage),
  ],
})
export class TemplateVideoPageModule {}
