import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { LightChannel, LightDefinition } from '../lights';
import { FormsModule } from '@angular/forms';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { bootstrapPlus } from '@ng-icons/bootstrap-icons';

@Component({
  selector: 'app-light-def-form',
  standalone: true,
  imports: [FormsModule, NgIconComponent],
  templateUrl: './light-def-form.component.html',
  styleUrl: './light-def-form.component.scss',
  providers: [provideIcons({bootstrapPlus})]
})
export class LightDefFormComponent implements OnInit {
  @Input({required: true}) definition!: LightDefinition;
  @Output() defChanged = new EventEmitter<LightDefinition>();

  ngOnInit(): void {
    this._name = this.definition.name;
    this.channels = this.definition.channels;
  }

  private _name = "";
  get name() {
    return this._name;
  }
  set name(value: string) {
    this._name = value;
    this.definition.name = value;
    this.defChanged.emit(this.definition);
  }

  channels: LightChannel[] = [];
  addChannel() {
    this.channels.push(0);
  }
  removeChannel(index: number) {
    this.channels.splice(index, 1);
  }
  saveChannels() {
    this.channels = this.channels.map(v => {
      if (typeof v === 'string' && (v !== 'red' && v !== 'blue' && v !== 'green'))
        return Number(v) || 0;
      return v;
    });
    this.definition.channels = this.channels;
    this.defChanged.emit(this.definition);
  }
}
