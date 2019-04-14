import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CustomizationStep3Page } from '../customization-step3/customization-step3';
import { CustomizationPage } from '../customization/customization';

/**
 * Generated class for the CustomizationStep2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-customization-step2',
  templateUrl: 'customization-step2.html',
})
export class CustomizationStep2Page {

  step1 = CustomizationPage;
  step3 = CustomizationStep3Page;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CustomizationStep2Page');
  }

  onClickStepNextButton(){
    this.navCtrl.push(this.step3);
  }

  onClickStepPreviousButton(){
    this.navCtrl.push(this.step1);
  }

}
