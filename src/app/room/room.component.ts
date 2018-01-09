import { Component, OnInit, EventEmitter } from '@angular/core';
import { Input } from '@angular/core';
import { ViewChildren } from '@angular/core';
import { QueryList } from '@angular/core';
import { Output } from '@angular/core';
import { Room } from '../model/room';
import { Filter } from '../model/filter';
import { FilterService } from '../services/filter.service';
import { Subscription } from 'rxjs/Subscription';


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
  subscription: Subscription;
  filter: Filter;
  
  constructor(private filterService: FilterService) {
    this.subscription = this.filterService.getFilter().subscribe(filter => this.filter = filter);
   }

  ngOnInit() {
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

  getControlPanelXpos()
  {
    return +this.room.Xpos +5;
  }
  getControlPanelYpos()
  {
    return +this.room.Ypos + (+this.room.height/3)*2 - 10;    
  }
  getControlPanelHeight()
  {
    return +this.room.height/3;
  }
  getControlPanelWidth()
  {
    return +this.room.width - 5;
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
