import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Filter } from '../model/filter';
import { FilterService } from '../services/filter.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
  filter: Filter;
  subscription: Subscription;
  @Output()
  updateFilter: EventEmitter<Filter> = new EventEmitter();

  constructor(private filterService: FilterService) { 
    this.subscription = this.filterService.getFilter().subscribe(filter => this.filter = filter);
  }

  ngOnInit() {
  }

  changeFilter()
  {
    this.filterService.updateFilter(this.filter);
  }

}
