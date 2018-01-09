import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../services/weather.service';
import {Observable} from 'rxjs/Rx';
import { WeatherData } from '../model/weather';
import { error } from 'util';

@Component({
  selector: 'weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  temp: number;
  weatherdata: WeatherData;
  constructor(private weatherService: WeatherService) { }

  ngOnInit() {
    let data = this.weatherService.getTemp();
    let timer = Observable.timer(1, 600000);
    timer.subscribe(t=> {
      console.log("tick")
        this.temp = this.weatherService.getTemp().current.temp_c;
    });
  }

}
