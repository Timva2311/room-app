import { Component, OnInit, EventEmitter } from '@angular/core';
import { Input } from '@angular/core';
import { ViewChildren } from '@angular/core';
import { QueryList } from '@angular/core';
import { Output } from '@angular/core';
import { Room } from '../model/room';


@Component({
  selector: 'room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css']
})
export class RoomComponent implements OnInit {
  @Input()
  room: Room;

  @Output()
  updateSelectedComponent: EventEmitter<Room> = new EventEmitter();
  
  selected = false;
  
  constructor() { }

  ngOnInit() {
    console.log(this);
  }

  closeCurtains(event)
  {
    if(this.room.curtains)
    {
      this.room.curtains = false;
    }
    else
    {
      this.room.curtains = true;
    }
  }

  toggleLight(event)
  {
    if(this.room.light)
    {
      this.room.light = false;
    }
    else this.room.light = true;
  }

  getBackground()
  {
    let strength = 250 - this.room.lightStrength*3;
    if(this.room.light)
    {
      return `rgb(255, 255, ${strength})`;      
    }
    if(this.room.curtains && !this.room.light)
    {
      return "black";
    }
    else return "";
  }

  getControlPanelLocation()
  {
    return +this.room.Xpos + +this.room.width + 10;
  }

  selectThis()
  {
    this.updateSelectedComponent.emit(this.room);
    this.selected = true;
  }

  getMusicLevel()
  {
    if(!this.room.music)
    {
      return null
    }
    if (this.room.musicStrength < 10)
    {
        return 0
    }
    else if (this.room.musicStrength < 30 && this.room.musicStrength > 10){
      return 1
    }
    else if (this.room.musicStrength <= 50 && this.room.musicStrength > 30)
    {
      return 2
    }
  }
}
