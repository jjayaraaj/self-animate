import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-color-picker',
  templateUrl: 'color-picker.html',
})
export class ColorPickerPage {
  
  colorValue:string = "#006666";
  textColor:string = "#000000";
  valueFromButton: string;

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public viewCtrl: ViewController) {

      this.valueFromButton =this.navParams.get('buttonValue');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ColorPickerPage');

  }

  setColor(value){
    if(this.valueFromButton === "background")
      this.colorValue = value;
      else
      this.textColor = value;

    this.onClickClose(true);
  }

  onClickClose(close = false){
    if(this.valueFromButton === "background")
      this.viewCtrl.dismiss({colorValue: this.colorValue});
    else
    this.viewCtrl.dismiss({colorValue: this.textColor});
    
  }

}
