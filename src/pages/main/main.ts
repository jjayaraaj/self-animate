import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TemplatePage } from '../template/template';
import { Youtube } from '../videos/youtube';
import { Http, Headers, RequestOptions } from '@angular/http';
import { TemplateService } from '../../services/template-service';
import { Template } from '../../models/template';
import { TemplateVideoPage } from '../template-video/template-video';


@IonicPage()
@Component({
  selector: 'page-main',
  templateUrl: 'main.html',
})
export class MainPage {
  isSearchOpened= false;
  templatePage = TemplatePage;
  youtubePage = Youtube;
  templateItems: Template[];
  templateVideo = TemplateVideoPage;

  templateData = [ {
    "id": "57",
    "parent_cat_id": "91",
    "youtube_code": "j0LGQuUYePg",
    "template_image": "https://www.selfanimate.com/uploads/91/92/57/images/Banner.jpg?1554877827",
    "cat_id": "92",
    "template_name": "Shape your dreams and ideas",
    "credits": "0",
    "uid": "50057"
},
{
    "id": "217",
    "parent_cat_id": "91",
    "youtube_code": "v7J8yDPwcwg",
    "template_image": "https://www.selfanimate.com/uploads/91/92/217/images/Banner.jpg?1554877827",
    "cat_id": "92",
    "template_name": "Good night wishes video template",
    "credits": "0",
    "uid": "50217"
},
{
    "id": "194",
    "parent_cat_id": "87",
    "youtube_code": "1RnSACSj-LY",
    "template_image": "https://www.selfanimate.com/uploads/87/88/194/images/Banner.jpg?1554877827",
    "cat_id": "88",
    "template_name": "New Year Wishes",
    "credits": "0",
    "uid": "50194"
},
{
    "id": "120",
    "parent_cat_id": "91",
    "youtube_code": "ghr_B0qoPms",
    "template_image": "https://www.selfanimate.com/uploads/91/92/120/images/Banner.jpg?1554877827",
    "cat_id": "92",
    "template_name": "Handy Pics",
    "credits": "0",
    "uid": "50120"
},];

  constructor(public navCtrl: NavController, public navParams: NavParams, private http: Http,
    public tplService: TemplateService) {
    
    this.tplService.addTemplates(this.templateData);
      
  }

  ionViewWillEnter(){
    this.loadTemplates();
    //this.freeTemplates();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MainPage');
  }

  onClickBusiness(){
    this.navCtrl.push(this.templatePage);
  }

  onClickDemo(youtube_code){
    console.log(youtube_code);
    this.navCtrl.push(this.youtubePage, {videoCode: youtube_code});
  }

  doInfinite($event){}

  private loadTemplates(){
    this.templateItems = this.tplService.getTemplatesDummy();
    console.log(this.templateItems);
  }

  onClickUse(){
    this.navCtrl.push(this.templateVideo);
  }

  

  getTemplate(){
   
    let headers = new Headers();
    headers.append('Access-Control-Allow-Headers' , '*');
    headers.append('Access-Control-Allow-Origin' , '*');
    headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');
    headers.append('Accept','application/json');
    headers.append('content-type','text/plain');
   // headers.append('Authorization', 'Basic ' + btoa('x-api-key:H3eEKB9xxYZZi2HCH6Ku036cU')); 
    headers.append('x-api-key', 'H3eEKB9xxYZZi2HCH6Ku036cU',)
    let options = new RequestOptions({ headers:headers});
    console.log(headers.get('x-api-key')); 
   this.http.get('https://www.selfanimate.com/api/templates?type=free', options).subscribe( result =>{
   let temp = result.json();
     this.templateItems = temp.templates;
   console.log(temp.templates);
   });
    }

    freeTemplates(){
      this.tplService.getTemplates()
        .subscribe(response =>{
          let temp = response.json();
          this.templateItems = temp.templates;
        });
    }

}
