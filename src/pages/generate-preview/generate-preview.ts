import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CustomizationPage } from '../customization/customization';

/**
 * Generated class for the GeneratePreviewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-generate-preview',
  templateUrl: 'generate-preview.html',
})
export class GeneratePreviewPage {
  customizePage= CustomizationPage;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GeneratePreviewPage');
  }

  onGeneratePreview(){
    this.navCtrl.push(this.customizePage);
  }

}
