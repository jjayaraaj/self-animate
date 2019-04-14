import { Template } from "../models/template";
import { Injectable } from "@angular/core";
import { Http, RequestOptions, Headers } from "@angular/http";
import { HttpClient, RequestOptions } from "@angular/common/http";

@Injectable()
export class TemplateService {

    private url = "https://www.selfanimate.com/api/";

    private templates: Template[] = [];

    constructor(private http: HttpClient, private template: Template){}

    addTemplates(template: Template[]){
        this.templates.push(...template);
       // console.log(this.templates);
    }

    
    getTemplates(){
       // return this.templates.slice();
       let headers = new Headers();
       headers.append('Access-Control-Allow-Headers' , '*');
       headers.append('Access-Control-Allow-Origin' , '*');
       headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');
       headers.append('Accept','application/json');
       headers.append('content-type','text/plain');
       headers.append('x-api-key', 'H3eEKB9xxYZZi2HCH6Ku036cU',)
        let options = new RequestOptions({ headers:headers});
       return this.http.get(this.url);
    }

    getTemplatesDummy(){
        return this.templates.slice();
    }
}