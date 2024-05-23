import { Injectable } from '@angular/core';
import { LightPattern } from './light-patterns.service';

@Injectable({
  providedIn: 'root'
})
export class DmxApiService {
  private storageKey = 'ipAddress';
  
  private _ipAddress;
  get ipAddress(): string {
    return this._ipAddress;
  }
  set ipAddress(value: string) {
    this._ipAddress = value;
    localStorage.setItem(this.storageKey, value);
  }

  constructor() {
    const value = localStorage.getItem(this.storageKey);
    this._ipAddress = value || '192.168.1.100';
  }

  setPattern(address: number, values: number[]) {
    console.log(`todo: set ${address} = ${JSON.stringify(values)}`);
  }
}
