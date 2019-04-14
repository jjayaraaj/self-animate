import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

/**
 * Generated class for the RenderPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-render',
  templateUrl: 'render.html',
})
export class RenderPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
    this.onClickMakeVideo();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RenderPage');
  }

  onClickMakeVideo(){
    const alert = this.alertCtrl.create({
      title: "Your Video Rendering in Progressing",
      message: "The expected wait time is 10 minutes. The finished video will be sent to your registered email shortly",
      buttons: [
        {
          text: 'SHARE YOUR EXPERIENCE AND YOU WILL GET 1 CREDITS',
          role: 'cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        }]
    });
    alert.present();
  }

}
