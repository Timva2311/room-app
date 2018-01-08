import { FloorComponent } from "../floor/floor.component";
import {Floor} from "../model/floor";
import {Room} from "../model/room";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { Injectable } from "@angular/core";


@Injectable()
export class FloorService {
    private FloorUrl = 'api/floors'
    constructor(private http: HttpClient) { }
    private headers = new HttpHeaders({'Content-Type': 'application/json'});
    private errorMessage;
    
    getFloors(): Observable<Floor[]> {
        return this.http.get<Floor[]>(this.FloorUrl);
    }

    public getFloor(id: number): Observable<Floor> {
        const url = `${this.FloorUrl}/${id}`;
        return this.http.get<Floor>(url);
      }

    updateFloor(floor: Floor){
        let updateUrl = `${this.FloorUrl}/${floor.id}`;
        this.http.put(updateUrl, JSON.stringify(floor), { headers: this.headers}).subscribe(
            result => console.log(result),
            error => this.errorMessage = <any>error
    );  
    console.log(this.errorMessage)
    }
}