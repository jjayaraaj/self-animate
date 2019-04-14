import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, ViewController } from 'ionic-angular';
import { ColorPickerPage } from '../color-picker/color-picker';
import { CustomizationStep2Page } from '../customization-step2/customization-step2';


@IonicPage()
@Component({
  selector: 'page-customization',
  templateUrl: 'customization.html',
})
export class CustomizationPage {

  colorValue:string = '#eeeeee';
  textValue:string = '#eeeeee';
  step2 = CustomizationStep2Page;
 
  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public modalCtrl: ModalController,
    public viewCtrl: ViewController
    ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CustomizationPage');
  }

  selectChange(e) {
    console.log(e);
  }
  onClickColorPicker(buttonValue){
    const modal = this.modalCtrl.create(ColorPickerPage,{
      buttonValue: buttonValue
    });
    modal.onDidDismiss(data => {
      if (data) {
        if(buttonValue == "background")
          this.colorValue = data.colorValue;
        else
        this.textValue = data.colorValue;
      }
    });
    modal.present();
  }

  onClickStepNextButton(){
    this.navCtrl.push(this.step2);
  }


  
}
