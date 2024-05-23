import { Injectable } from '@angular/core';
import { LightPattern } from './light-patterns.service';

@Injectable({
  providedIn: 'root'
})
export class DmxApiService {

  constructor() { }

  setPattern(pattern: LightPattern) {
    console.log("TODO: Set color pattern: " + JSON.stringify(pattern));
  }
}
