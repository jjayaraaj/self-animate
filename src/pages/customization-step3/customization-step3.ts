import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { CustomizationStep2Page } from '../customization-step2/customization-step2';
import { RenderPage } from '../render/render';

/**
 * Generated class for the CustomizationStep3Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-customization-step3',
  templateUrl: 'customization-step3.html',
})
export class CustomizationStep3Page {

  defaultMusicName = "Default";
  step2 = CustomizationStep2Page;
  renderPage = RenderPage;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public alertCtrl: AlertController
    ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CustomizationStep3Page');
  }

  onClickMakeVideo(){
   /* const alert = this.alertCtrl.create({
      title: "Your Video is Rendering",
      message: "SHARE YOUR EXPERIENCE AND YOU WILL GET 5 CREDITS",
      buttons: [
        {
          text: 'Ok',
          role: 'cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        }]
    });
    alert.present();*/

    this.navCtrl.push(this.renderPage);

  }

  onClickStepPreviousButton()
  {
    this.navCtrl.push(this.step2);
  }

}
