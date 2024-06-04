import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ColorDef, ConfigService } from './config.service';
import { Light, LightDefinition } from './lights';
import { CommonModule } from '@angular/common';
import { LightDefFormComponent } from './light-def-form/light-def-form.component';
import { LightFormComponent } from './light-form/light-form.component';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { bootstrapArrowDown, bootstrapArrowUp } from '@ng-icons/bootstrap-icons';

@Component({
  selector: 'app-config',
  standalone: true,
  imports: [FormsModule, CommonModule, LightDefFormComponent, LightFormComponent, NgIconComponent],
  templateUrl: './config.component.html',
  styleUrl: './config.component.scss',
  providers: [provideIcons({bootstrapArrowUp, bootstrapArrowDown})],
})
export class ConfigComponent {

  constructor(private config: ConfigService) {
    this._ipAddress = config.ipAddress;
    this._definitions = config.lightDefinitions;
    this._lights = config.lights;
    this.colors = config.colors;
  }

  private _ipAddress: string;
  get ipAddress() {
    return this._ipAddress;
  }
  set ipAddress(value: string) {
    this._ipAddress = value;
    this.config.ipAddress = value;
    this.config.save();
  }

  private _definitions: LightDefinition[];
  get definitions() {
    return this._definitions;
  }
  updateDefinition(index: number, def: LightDefinition) {
    this._definitions[index] = def;
    this.config.lightDefinitions = this._definitions;
    this.config.save();
  }
  addDefinition() {
    this._definitions.push({name: 'New Def', channels: []});
    this.config.lightDefinitions = this._definitions;
    this.config.save();
  }
  removeDefinition(index: number) {
    this._definitions.splice(index, 1);
    this.config.lightDefinitions = this._definitions;
    this.config.save();
  }

  private _lights: Light[];
  get lights() {
    return this._lights;
  }
  updateLight(index: number, light: Light) {
    this._lights[index] = light;
    this.config.lights = this._lights;
    this.config.save();
  }
  addLight() {
    this._lights.push(new Light('New Light', this.definitions[0], 1));
    this.config.lights = this._lights;
    this.config.save();
  }
  removeLight(index: number) {
    this._lights.splice(index, 1);
    this.config.lights = this._lights;
    this.config.save();
  }

  colors: ColorDef[];
  updateColors() {
    this.config.colors = this.colors;
    this.config.save();
  }
  addColor() {
    this.colors.push({name: '', hex: '#000000'});
    this.updateColors();
  }
  removeColor(index: number) {
    this.colors.splice(index, 1);
    this.updateColors();
  }
  moveColor(index: number, direction: number) {
    if (index === 0 && direction === -1) return;
    if (index === this.colors.length - 1 && direction === 1) return;
    let color = this.colors[index];
    this.colors[index] = this.colors[index + direction];
    this.colors[index + direction] = color;
    this.updateColors();
  }
}
