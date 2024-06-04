import { Component } from '@angular/core';
import { DmxApiService } from '../dmx-api.service';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { bootstrapPlusCircle } from '@ng-icons/bootstrap-icons';
import { ColorDef, ConfigService } from '../config/config.service';
import { Light } from '../config/lights';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pattern-board',
  standalone: true,
  imports: [NgIconComponent, CommonModule],
  templateUrl: './pattern-board.component.html',
  styleUrl: './pattern-board.component.scss',
  providers: [provideIcons({bootstrapPlusCircle})],
})
export class PatternBoardComponent {
  
  constructor(public config: ConfigService, public dmxApi: DmxApiService) {}

  selectColor(light: Light, color: ColorDef) {
    const bytes = light.getValues(color.hex);
    this.dmxApi.setPattern(this.config.ipAddress, light.address, bytes);
  }
}
