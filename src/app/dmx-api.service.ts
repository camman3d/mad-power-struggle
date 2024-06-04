import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DmxApiService {

  setPattern(ipAddress: string, channel: number, values: number[]) {
    let params = new URLSearchParams();
    for (let i = 0; i < values.length; i++)
      params.append(String(channel + i), String(values[i]));
    let url = 'http://' + String(params);

    fetch(url, {
      method: 'POST',
      mode: 'no-cors',
      body: '',
    });
  }
}
