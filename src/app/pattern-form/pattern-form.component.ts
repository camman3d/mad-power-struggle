import { Component, Input } from '@angular/core';
import { LightPattern } from '../light-patterns.service';

@Component({
  selector: 'app-pattern-form',
  standalone: true,
  imports: [],
  templateUrl: './pattern-form.component.html',
  styleUrl: './pattern-form.component.scss'
})
export class PatternFormComponent {
  @Input() pattern!: LightPattern;
}
