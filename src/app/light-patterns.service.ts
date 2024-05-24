import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, from, map } from 'rxjs';
import { groupBy } from './group-by.pipe';


type SlotDef = Array<number | string>;
const ParCanSlots: SlotDef = [255, 'r', 'g', 'b'];
export interface LightPattern {
  id: string,
  name: string,
  color: string,
  address: number,
  slots: string,
  group: string,
}
export const EmptyLightPattern: LightPattern = {
  id: '', name: '', color: '', address: 0, slots: '', group: ''
}

// Mix-ins for par cans
const ParCan1 = {address: 1, group: 'Par Can 1', slots: 'Par Can'};
const ParCan2 = {address: 4, group: 'Par Can 2', slots: 'Par Can'};

@Injectable({
  providedIn: 'root'
})
export class LightPatternsService {
  private storageKey = 'lightPatterns';
  private patternsSubject: BehaviorSubject<LightPattern[]>;
  public patterns$: Observable<LightPattern[][]>;

  public get fixtureTypes() {
    return [
      {name: 'Par Can', slots: ParCanSlots},
    ]
  }

  constructor() { 
    const data = localStorage.getItem(this.storageKey);
    const items = data ? JSON.parse(data) : [
      Object.assign({name: 'White',  color: '#ffffff'}, ParCanSlots, ParCan1),
      Object.assign({name: 'Black',  color: '#000000'}, ParCanSlots, ParCan1),
      Object.assign({name: 'Blue',   color: '#3b82f6'}, ParCanSlots, ParCan1),
      Object.assign({name: 'Green',  color: '#22c55e'}, ParCanSlots, ParCan1),
      Object.assign({name: 'Yellow', color: '#eab308'}, ParCanSlots, ParCan1),
      Object.assign({name: 'Orange', color: '#f97316'}, ParCanSlots, ParCan1),
      Object.assign({name: 'Red',    color: '#ef4444'}, ParCanSlots, ParCan1),
      Object.assign({name: 'Purple', color: '#a855f7'}, ParCanSlots, ParCan1),
      Object.assign({name: 'White',  color: '#ffffff'}, ParCanSlots, ParCan2),
      Object.assign({name: 'Black',  color: '#000000'}, ParCanSlots, ParCan2),
      Object.assign({name: 'Blue',   color: '#3b82f6'}, ParCanSlots, ParCan2),
      Object.assign({name: 'Green',  color: '#22c55e'}, ParCanSlots, ParCan2),
      Object.assign({name: 'Yellow', color: '#eab308'}, ParCanSlots, ParCan2),
      Object.assign({name: 'Orange', color: '#f97316'}, ParCanSlots, ParCan2),
      Object.assign({name: 'Red',    color: '#ef4444'}, ParCanSlots, ParCan2),
      Object.assign({name: 'Purple', color: '#a855f7'}, ParCanSlots, ParCan2),
    ].map(v => Object.assign(v, {id: this.randomId()}));
    this.patternsSubject = new BehaviorSubject<LightPattern[]>(items);
    this.patterns$ = this.patternsSubject.pipe(map(value => groupBy(value, 'group')));
  }

  private save() {
    localStorage.setItem(this.storageKey, JSON.stringify(this.patternsSubject.value));
  }

  addPattern(pattern: LightPattern) {
    if (!pattern.id)
      pattern.id = this.randomId();
    const items = this.patternsSubject.value;
    items.push(pattern);
    this.patternsSubject.next(items);
    this.save();
  }

  updatePattern(pattern: LightPattern) {
    let items = this.patternsSubject.value;
    let index = items.findIndex(item => item.id === pattern.id);
    if (index === -1)
      return this.addPattern(pattern);
    items[index] = pattern;
    this.patternsSubject.next(items);
    this.save();
  }

  removePattern(pattern: LightPattern) {
    let items = this.patternsSubject.value;
    let index = items.findIndex(item => item.id === pattern.id);
    if (index === -1)
      return;
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
    let slots: SlotDef = this.fixtureTypes.find(fix => fix.name === pattern.slots)?.slots || [];
    return slots.map(value => {
      let type = typeof value;
      if (type == 'number')
        return value as number;
      else if (type == 'string')
        return rgb[value] || 0;
      return 0;
    });
  }

  private randomId(): string {
    return Math.random().toString(16).substring(2);
  }

}
