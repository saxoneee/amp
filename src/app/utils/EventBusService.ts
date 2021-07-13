import { Injectable } from "@angular/core";
import { Subject, Subscription } from "rxjs";
import { filter, map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class EventBusService {
  private subject$ = new Subject();

  constructor() {}

  emit(event:any){
    this.subject$.next(event);
  }

  on(eventName:string, action: any): Subscription {
    return this.subject$.pipe(
      filter( (name:any) => name === eventName),
      map((name:any, value:any) => {return value})).subscribe(action);
  }
}
