import { Injectable } from '@angular/core';
import {HttpClient} from  '@angular/common/http';

@Injectable({
  providedIn: 'root'
})


export class Servizzio01Service {

  constructor( private httclient : HttpClient){}

  httpGet(url:string){
    return this.httclient.get<any>(url)  // restituisce un Observable
  }
}