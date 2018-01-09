import { Injectable } from "@angular/core";
import { OnInit } from "@angular/core";
import { Http, Response } from '@angular/http';
import {Headers} from '@angular/http'
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {WeatherData} from '../model/weather';
import { collectExternalReferences } from "@angular/compiler/src/output/output_ast";

@Injectable()
export class WeatherService implements OnInit
{
    constructor (private http: Http) {}
    private url = "http://api.apixu.com/v1/current.json?key=50fceb004f1b47d4ac4161040180801&q=Paris";
    weatherdata: any;
    ngOnInit(): void {
    }
    
    getTemp()
    {
        this.http.get(this.url).map(response => response.json()).subscribe(
            data => this.weatherdata = data,
            err => console.log(err)
          );
        return this.weatherdata;
    }
}

