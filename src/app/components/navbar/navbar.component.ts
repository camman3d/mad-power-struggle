import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { bootstrapGearWideConnected, bootstrapGrid } from '@ng-icons/bootstrap-icons';
import { NgIconComponent, provideIcons } from '@ng-icons/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [NgIconComponent, RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
  providers: [provideIcons({bootstrapGearWideConnected, bootstrapGrid})]
})
export class NavbarComponent {

}
