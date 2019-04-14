import { Component, Input } from '@angular/core';
import {  NavController, NavParams, IonicPage } from 'ionic-angular';
import {DomSanitizer,SafeResourceUrl,} from '@angular/platform-browser';




@IonicPage()
@Component({
  selector: 'page-youtube',
  templateUrl: 'youtube.html'
})



export class Youtube{
  @Input()
  url: string = "https://www.youtube.com/embed/";
  urlSafe: SafeResourceUrl;
  videoCode:string;
    constructor(public navCtrl: NavController, public navParams: NavParams, public sanitizer: DomSanitizer) {
      //
     
    }

    ngOnInit() {
       this.videoCode = this.navParams.get('videoCode');
      console.log(this.videoCode);
      this.urlSafe= this.sanitizer.bypassSecurityTrustResourceUrl(this.url+this.videoCode);    
  }

    ionViewDidEnter(){
 
    }
}