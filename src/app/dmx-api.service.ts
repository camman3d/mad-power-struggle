import { Injectable } from '@angular/core';
import { LightPattern } from './light-patterns.service';

@Injectable({
  providedIn: 'root'
})
export class DmxApiService {

  constructor() { }

  setPattern(address: number, values: number[]) {
    console.log(`todo: set ${address} = ${JSON.stringify(values)}`);
  }
}
