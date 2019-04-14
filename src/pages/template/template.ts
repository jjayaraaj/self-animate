import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, PopoverController } from 'ionic-angular';
import { TemplateVideoPage } from '../template-video/template-video';
import { CategoryPopoverPage } from '../category-popover/category-popover';
import { Youtube } from '../videos/youtube';


@IonicPage()
@Component({
  selector: 'page-template',
  templateUrl: 'template.html',
})
export class TemplatePage {

  templateVideo = TemplateVideoPage;
  demoVideoPage = Youtube;
  isSearchOpened= false;

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public popoverCtrl: PopoverController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TemplatePage');
  }

  onClickVideo(){
    this.navCtrl.push(this.templateVideo);
  }

  doInfinite(){

  }

  presentPopover(myEvent) {
    let popover = this.popoverCtrl.create(CategoryPopoverPage);
    popover.present({
      ev: myEvent
    });
  }

  onClickDemo(){
    this.navCtrl.push(this.demoVideoPage);
  }




}
