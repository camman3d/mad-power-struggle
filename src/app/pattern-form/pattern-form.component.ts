import { Component, Input, OnInit } from '@angular/core';
import { EmptyLightPattern, LightPattern, LightPatternsService } from '../light-patterns.service';
import { FormsModule } from '@angular/forms';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-pattern-form',
  standalone: true,
  imports: [FormsModule, NgIf, NgFor],
  templateUrl: './pattern-form.component.html',
  styleUrl: './pattern-form.component.scss'
})
export class PatternFormComponent implements OnInit {
  @Input({required: true, alias: 'pattern'}) inPattern!: LightPattern;
  @Input() onSaved?: () => void;
  pattern: LightPattern = EmptyLightPattern;

  constructor(public lightPatterns: LightPatternsService) {}

  ngOnInit(): void {
    this.pattern = Object.assign({}, this.inPattern);
  }

  save() {
    this.lightPatterns.updatePattern(this.pattern);
    this.onSaved && this.onSaved();
  }

  remove() {
    this.lightPatterns.removePattern(this.pattern);
    this.onSaved && this.onSaved();
  }

}
