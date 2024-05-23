import { Component } from '@angular/core';
import { DmxApiService } from '../dmx-api.service';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-config',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './config.component.html',
  styleUrl: './config.component.scss'
})
export class ConfigComponent {
  config: FormGroup<{
    ipAddress: FormControl<string | null>
  }>;

  constructor(private dmxApi: DmxApiService) {
    this.config = new FormGroup({
      ipAddress: new FormControl<string>(dmxApi.ipAddress),
    });
  }

  save() {
    this.dmxApi.ipAddress = this.config.value.ipAddress || '';
  }
}
