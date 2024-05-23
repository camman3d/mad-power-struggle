import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, from } from 'rxjs';

export interface LightPattern {
  name: string,
  color: string,
  address: number,
  slots: Array<number | string>,
  group: string,
}

// Mix-ins for par cans
const ParCanSlots = {slots: [255, 'r', 'g', 'b']};
const ParCan1 = {address: 1, group: 'Par Can 1'};
const ParCan2 = {address: 4, group: 'Par Can 2'};

@Injectable({
  providedIn: 'root'
})
export class LightPatternsService {
  private storageKey = 'lightPatterns';
  private patternsSubject: BehaviorSubject<LightPattern[]>;
  public patterns$: Observable<LightPattern[]>;

  constructor() { 
    const data = localStorage.getItem(this.storageKey);
    const items = data ? JSON.parse(data) : [
      Object.assign({name: 'Blue',   color: '#3b82f6'}, ParCanSlots, ParCan1),
      Object.assign({name: 'Green',  color: '#22c55e'}, ParCanSlots, ParCan1),
      Object.assign({name: 'Yellow', color: '#eab308'}, ParCanSlots, ParCan1),
      Object.assign({name: 'Orange', color: '#f97316'}, ParCanSlots, ParCan1),
      Object.assign({name: 'Red',    color: '#ef4444'}, ParCanSlots, ParCan1),
      Object.assign({name: 'Purple', color: '#a855f7'}, ParCanSlots, ParCan1),
      Object.assign({name: 'Blue',   color: '#3b82f6'}, ParCanSlots, ParCan2),
      Object.assign({name: 'Green',  color: '#22c55e'}, ParCanSlots, ParCan2),
      Object.assign({name: 'Yellow', color: '#eab308'}, ParCanSlots, ParCan2),
      Object.assign({name: 'Orange', color: '#f97316'}, ParCanSlots, ParCan2),
      Object.assign({name: 'Red',    color: '#ef4444'}, ParCanSlots, ParCan2),
      Object.assign({name: 'Purple', color: '#a855f7'}, ParCanSlots, ParCan2),
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

  private hexToRgb(hex: string): {[color: string]: number} {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
    } : {r: 0, g: 0, b: 0};
  }

  patternToBytes(pattern: LightPattern): number[] {
    const rgb = this.hexToRgb(pattern.color);
    return pattern.slots.map(value => {
      let type = typeof value;
      if (type == 'number')
        return value as number;
      else if (type == 'string')
        return rgb[value] || 0;
      return 0;
    });
  }

}
