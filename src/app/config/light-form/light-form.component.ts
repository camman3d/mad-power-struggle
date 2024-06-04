import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Light, LightDefinition } from '../lights';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-light-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './light-form.component.html',
  styleUrl: './light-form.component.scss'
})
export class LightFormComponent implements OnInit {
  @Input({required: true}) light!: Light;
  @Input({required: true}) definitions!: LightDefinition[];
  @Output() lightChanged = new EventEmitter<Light>();

  name = "";
  definitionIndex = 0;
  address = 1;

  ngOnInit(): void {
    this.name = this.light.name;
    this.definitionIndex = this.definitions.findIndex(d => this.light.definition)!;
    this.address = this.light.address;
  }

  updateLight() {
    this.light.name = this.name;
    this.light.definition = this.definitions[this.definitionIndex];
    this.light.address = this.address;
    this.lightChanged.emit(this.light);
  }
}
