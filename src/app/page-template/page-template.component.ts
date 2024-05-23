import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-page-template',
  standalone: true,
  imports: [NavbarComponent],
  templateUrl: './page-template.component.html',
  styleUrl: './page-template.component.scss'
})
export class PageTemplateComponent {

}
