import { Component } from '@angular/core';
import { LightPattern, LightPatternsService } from '../light-patterns.service';
import { CommonModule, NgFor } from '@angular/common';
import { DmxApiService } from '../dmx-api.service';
import { GroupByPipe } from '../group-by.pipe';

@Component({
  selector: 'app-pattern-board',
  standalone: true,
  imports: [NgFor, CommonModule, GroupByPipe],
  templateUrl: './pattern-board.component.html',
  styleUrl: './pattern-board.component.scss'
})
export class PatternBoardComponent {
  constructor(public lightPatterns: LightPatternsService, private dmxApi: DmxApiService) {}

  setPattern(pattern: LightPattern) {
    const bytes = this.lightPatterns.patternToBytes(pattern);
    this.dmxApi.setPattern(pattern.address, bytes);
  }
}
