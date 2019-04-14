import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CategoryPopoverPage } from './category-popover';

@NgModule({
  declarations: [
    CategoryPopoverPage,
  ],
  imports: [
    IonicPageModule.forChild(CategoryPopoverPage),
  ],
})
export class CategoryPopoverPageModule {}
