import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';
import { Subject } from 'rxjs/Subject';
import { Filter } from "../model/filter";
import { BehaviorSubject } from "rxjs/BehaviorSubject";

@Injectable()
export class FilterService {
    private subject = new BehaviorSubject(new Filter());

    getFilter(): Observable<Filter>
    {
        return this.subject.asObservable();
    }
    updateFilter(filter: Filter)
    {
        this.subject.next(filter);
    }
}
