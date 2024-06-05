import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DmxApiService {

  setPattern(ipAddress: string, channel: number, values: number[]) {
    let params = new URLSearchParams();
    for (let i = 0; i < values.length; i++)
      params.append(String(channel + i), String(values[i]));
    let url = 'http://' + ipAddress + '/setDMX?' + String(params);

    if (window.location.protocol === 'https:') {
      // We can't do http requests from https (mixed content blocking)
      // So instead we'll load as passive content, such as an img
      // See: https://developer.mozilla.org/en-US/docs/Web/Security/Mixed_content
      let img = document.createElement('img');
      img.src = url;
    } else {
      fetch(url, {method: 'GET', mode: 'no-cors'});
    }
  }
}
