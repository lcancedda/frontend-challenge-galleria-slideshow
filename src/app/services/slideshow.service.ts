import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SlideshowService {

  public slideshowState$ = new BehaviorSubject<boolean>(false);
  public slideshowIndex$ = new BehaviorSubject<number>(0);
  
  constructor() { }

  toggleSlideshowState(state: boolean){
    this.slideshowState$.next(state);
  }

  setSlideshowIndex(index: number){
    this.slideshowIndex$.next(index);
  }
}
