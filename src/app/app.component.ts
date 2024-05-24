import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PageTemplateComponent } from './page-template/page-template.component';
import { PatternBoardComponent } from './pattern-board/pattern-board.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PageTemplateComponent, PatternBoardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'mad-power-struggle';
}
