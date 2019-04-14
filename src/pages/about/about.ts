import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { InAppBrowser, InAppBrowserOptions } from '@ionic-native/in-app-browser';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  url: string = "http://selfanimate.com/";

  constructor(public navCtrl: NavController,
              public inAppBrowser: InAppBrowser
    ) {
        
      }

      
      openMakeVideo(){

        const options:InAppBrowserOptions = {
          zoom: 'no',
          hidenavigationbuttons: 'no'
        };

        const browser = this.inAppBrowser.create(this.url, '_self');

      }

}
