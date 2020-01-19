import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  _configuration: any;

  constructor() { }

  set(configuration: any) {
    console.log('config', configuration);
    this._configuration = configuration;
  }

  getConfig() {
    return this._configuration;
  }
}
