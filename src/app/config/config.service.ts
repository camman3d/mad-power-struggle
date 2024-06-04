import { Injectable } from '@angular/core';
import { Light, LightDefinition } from './lights';

export interface ColorDef {
  name: string,
  hex: string,
}

const ConfigStorageKey = "MPS_Config";

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  ipAddress: string;
  lightDefinitions: LightDefinition[];
  lights: Light[];
  colors: ColorDef[];

  constructor() { 
    let configStr = localStorage.getItem(ConfigStorageKey);
    if (!configStr) {
      this.ipAddress = '192.168.1.100';
      this.lightDefinitions = [];
      this.lights = [];
      this.colors = [
          {name: 'White',  hex: '#ffffff'},
          {name: 'Black',  hex: '#000000'},
          {name: 'Blue',   hex: '#3b82f6'},
          {name: 'Green',  hex: '#22c55e'},
          {name: 'Yellow', hex: '#eab308'},
          {name: 'Orange', hex: '#f97316'},
          {name: 'Red',    hex: '#ef4444'},
          {name: 'Purple', hex: '#a855f7'},
      ];

    } else {
      let config = JSON.parse(configStr);
      this.ipAddress = config.ipAddress;
      this.lightDefinitions = config.lightDefinitions;
      this.lights = Light.instantiate(config.lights, this.lightDefinitions);
      this.colors = config.colors;
    }
  }

  save() {
    localStorage.setItem(ConfigStorageKey, JSON.stringify({
      ipAddress: this.ipAddress,
      lightDefinitions: this.lightDefinitions,
      lights: this.lights.map(l => l.toObj()),
      colors: this.colors,
    }));
  }
}
