import { Component } from '@angular/core';
import { FloorService } from './services/floor.service';
import { Floor } from './model/floor';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { Filter } from './model/filter';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  ngOnInit(): void {
  }
  
}
