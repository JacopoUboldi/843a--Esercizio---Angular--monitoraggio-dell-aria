import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/internal/Subscription';
import { environment } from 'src/environments/environment';
import { Servizzio01Service } from '../servizzio01.service';

@Component({
  selector: 'app-weather-widget-main',
  templateUrl: './weather-widget-main.component.html',
  styleUrls: ['./weather-widget-main.component.css']
})
export class WeatherWidgetMainComponent implements OnInit , OnDestroy {

  Dati : any;
  subscription :Subscription;
  apiEndpoint=environment.apiEndpoint
 
  constructor(private meteo01:Servizzio01Service) { }
  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe() 
      console.log("oggetto WeatherWidgetMainComponent distrutto ")
    } 
  }

  ngOnInit(): void {
    this.Dati = {main: {}}
    this.getDati
  }

  getDati(){
    let observable=this.meteo01.httpGet(this.apiEndpoint)
    this.subscription=observable.subscribe( httpResponse => { console.log(httpResponse); this.setDati(httpResponse) })
  }

  setDati( info: any) {
    this.Dati = info; 
    let giorno = this.Dati[0].data
    this.Dati.giorno = giorno 
    let desc = this.Dati[0].descrizzione   
    this.Dati.descrizzione = desc 
    let prev = this.Dati[0].prevvisione
    this.Dati.prevvisione = prev
    let tend = this.Dati[0].tendenza
    this.Dati.tendenza = tend
  }
}
