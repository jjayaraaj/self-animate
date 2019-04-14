import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { MainPage } from '../main/main';
import { Network } from '@ionic-native/network';
import { Subscription } from 'rxjs/Subscription';



@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  mainPage = MainPage;
  onConnect$: Subscription;
  onDisconnect$: Subscription;

  constructor(public navCtrl: NavController, public navParams: NavParams,
      public network: Network, public toast: ToastController
    ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
    
  }
  onClickLogin(){
    this.navCtrl.setRoot(this.mainPage);
  }

  ionViewDidEnter(){
    this.onConnect$=this.network.onConnect().subscribe(data => {
      this.displayNetworkUpdate(data);
    }, error => console.error(error));

    this.onDisconnect$=this.network.onDisconnect().subscribe(data => {
      this.displayNetworkUpdate(data);
    }, error => console.error(error));
  }

  displayNetworkUpdate(connectionState: string){
    const connectionType = this.network.type;

    this.toast.create({
      message: `you are now ${connectionState} via ${connectionType}`,
      duration: 3000
    }).present();
  }

  ionViewWillLeave(){
    this.onConnect$.unsubscribe();
    this.onDisconnect$.unsubscribe();
  }

}
