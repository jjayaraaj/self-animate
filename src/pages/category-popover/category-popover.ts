import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';



@IonicPage()
@Component({
  selector: 'page-category-popover',
  templateUrl: 'category-popover.html',
})
export class CategoryPopoverPage {

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public viewCtrl: ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CategoryPopoverPage');
  }

  close() {
    this.viewCtrl.dismiss();
  }

}
