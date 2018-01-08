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

const appRoutes: Routes = [
  {path: 'floor/:id', component: FloorComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    FloorComponent,
    RoomComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes),
    MatSliderModule,
    MatSlideToggleModule,
    MatGridListModule,
    MatCardModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      FloorData, { dataEncapsulation: false }
    ),
  ],
  providers: [
    [FloorService]
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
