import { Component, OnInit } from '@angular/core';
import { LightPattern, LightPatternsService } from '../light-patterns.service';
import { CommonModule, NgFor } from '@angular/common';
import { DmxApiService } from '../dmx-api.service';

@Component({
  selector: 'app-pattern-board',
  standalone: true,
  imports: [NgFor, CommonModule],
  templateUrl: './pattern-board.component.html',
  styleUrl: './pattern-board.component.scss'
})
export class PatternBoardComponent {
  constructor(public lightPatterns: LightPatternsService, public dmxApi: DmxApiService) {}

}
