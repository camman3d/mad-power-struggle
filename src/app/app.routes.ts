import { Routes } from '@angular/router';
import { PatternBoardComponent } from './pattern-board/pattern-board.component';
import { ConfigComponent } from './config/config.component';

export const routes: Routes = [
    {path: '', component: PatternBoardComponent},
    {path: 'config', component: ConfigComponent},
];
