import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { CustomizationPage } from '../customization/customization';
import { GeneratePreviewPage } from '../generate-preview/generate-preview';

/**
 * Generated class for the TemplateVideoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-template-video',
  templateUrl: 'template-video.html',
})
export class TemplateVideoPage {

 
  generatePreview = GeneratePreviewPage;

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TemplateVideoPage');
  }

  onClickCustomization(){
    this.navCtrl.push(this.generatePreview);
  }

  onCLickClose(){
    this.viewCtrl.dismiss();
  }

}
