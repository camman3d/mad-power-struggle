import { Component } from '@angular/core';
import { LightPattern, LightPatternsService } from '../light-patterns.service';
import { CommonModule, NgFor } from '@angular/common';
import { DmxApiService } from '../dmx-api.service';
import { GroupByPipe } from '../group-by.pipe';
import { MatSlideToggle } from '@angular/material/slide-toggle'
import { FormsModule } from '@angular/forms';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { bootstrapPlusCircle } from '@ng-icons/bootstrap-icons';
import { ModalComponent } from '../modal/modal.component';
import { PatternFormComponent } from '../pattern-form/pattern-form.component';

@Component({
  selector: 'app-pattern-board',
  standalone: true,
  imports: [NgFor, CommonModule, GroupByPipe, MatSlideToggle, FormsModule, NgIconComponent, ModalComponent, PatternFormComponent],
  templateUrl: './pattern-board.component.html',
  styleUrl: './pattern-board.component.scss',
  providers: [provideIcons({bootstrapPlusCircle})],
})
export class PatternBoardComponent {
  editMode = false;
  activePattern: LightPattern | undefined;

  constructor(public lightPatterns: LightPatternsService, private dmxApi: DmxApiService) {}

  selectPattern(pattern: LightPattern) {
    if (!this.editMode) {
      const bytes = this.lightPatterns.patternToBytes(pattern);
      this.dmxApi.setPattern(pattern.address, bytes);
    } else {
      this.activePattern = pattern;
    }
  }

  deselect = () => {
    this.activePattern = undefined;
  };
}
