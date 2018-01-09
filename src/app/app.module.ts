import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule} from '@angular/http';
import {RouterModule, Routes} from '@angular/router';
import {InMemoryWebApiModule} from 'angular-in-memory-web-api';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatSliderModule} from '@angular/material/slider';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {FormsModule} from "@angular/forms";
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import { AppComponent } from './app.component';
import { FloorComponent } from './floor/floor.component';
import {FloorService} from '../app/services/floor.service';
import { RoomComponent } from './room/room.component';
import { FloorData } from './services/floor-data';
import {HttpClientInMemoryWebApiModule} from 'angular-in-memory-web-api';
import {HttpClientModule, HttpClient} from '@angular/common/http';
import { WeatherComponent } from './weather/weather.component';
import { WeatherService } from './services/weather.service';
import { FilterComponent } from './filter/filter.component';
import { FilterService } from './services/filter.service';
import {MatButtonModule} from '@angular/material/button';


const appRoutes: Routes = [
  {path: 'floor/:id', component: FloorComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    FloorComponent,
    RoomComponent,
    WeatherComponent,
    FilterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes),
    MatSliderModule,
    MatSlideToggleModule,
    MatGridListModule,
    MatButtonModule,
    MatCardModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(FloorData),
  ],
  providers: [
    [FloorService],
    [WeatherService],
    [FilterService]
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
