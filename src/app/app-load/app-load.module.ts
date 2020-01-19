import { NgModule, APP_INITIALIZER } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfigService } from '../services/config.service';
import { resolve } from 'url';

function readConfig(configService: ConfigService) {
  return () => {
    return new Promise((resolve, reject) => {
     
      configService.set(window['appConfig']);
      resolve()
    });
  }
}



@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    ConfigService,
    { provide: APP_INITIALIZER, useFactory: readConfig, deps: [ConfigService], multi: true }
  ],
  exports: [
    // ConfigService
  ]
})
export class AppLoadModule { }
