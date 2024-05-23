import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export interface LightPattern {
  name: string,
  color: string,
}

@Injectable({
  providedIn: 'root'
})
export class LightPatternsService {
  private storageKey = 'lightPatterns';
  private patternsLoaded = false;
  private patternsSubject: BehaviorSubject<LightPattern[]>;
  public patterns$: Observable<LightPattern[]>;

  constructor() { 
    const data = localStorage.getItem(this.storageKey);
    const items = data ? JSON.parse(data) : [
      {name: 'Blue', color: '#3b82f6'},
      {name: 'Green', color: '#22c55e'},
      {name: 'Yellow', color: '#eab308'},
      {name: 'Orange', color: '#f97316'},
      {name: 'Red', color: '#ef4444'},
      {name: 'Purple', color: '#a855f7'},
    ];
    this.patternsSubject = new BehaviorSubject<LightPattern[]>(items);
    this.patterns$ = this.patternsSubject.asObservable();
  }

  private save() {
    localStorage.setItem(this.storageKey, JSON.stringify(this.patternsSubject.value));
  }

  addPattern(pattern: LightPattern) {
    const items = this.patternsSubject.value;
    items.push(pattern);
    this.patternsSubject.next(items);
    this.save();
  }

  removePattern(index: number) {
    const items = this.patternsSubject.value;
    items.splice(index, 1);
    this.patternsSubject.next(items);
    this.save();
  }

}
