import { Component, OnInit, Input, ViewChildren, QueryList, Output, EventEmitter } from '@angular/core';
import {FloorService} from '../services/floor.service';
import { Floor } from '../model/floor';
import { RoomComponent } from '../room/room.component';
import { Room } from '../model/room';
import { ParamMap, Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { error } from 'util';
import { Filter } from '../model/filter';

@Component({
  selector: 'floor',
  templateUrl: './floor.component.html',
  styleUrls: ['./floor.component.css']
})
export class FloorComponent implements OnInit {
  floor: Floor;
  outside: number;
  constructor(private floorservice: FloorService, private router: Router ,private route: ActivatedRoute) {
  }  

  @ViewChildren(RoomComponent) components: QueryList<RoomComponent>;  

  ngOnInit(): void {
    this.route.paramMap
    .switchMap((params: ParamMap) =>
      this.floorservice.getFloor(+params.get('id')))
    .subscribe(floor => this.floor = floor, error => console.log(error));
  }

  handleUpdateSelectedComponent(event)
  {
    let room: Room = event;
    this.deselect();
    let oldroom = this.floor.rooms.find(r => r.id == room.id);
    let index = this.floor.rooms.indexOf(oldroom);
    this.floor.rooms[index] = room;
    this.floorservice.updateFloor(this.floor);
  }

  deselect()
  {
    this.components.forEach(component => component.selected = false);
  }

}
