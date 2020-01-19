import { Injectable } from '@angular/core';
import { ConfigService } from './config.service';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(
    private configService: ConfigService,
    private http: HttpClient,
  ) { }

  search = (text: string) => {
    const config = this.configService.getConfig()
    const apiBase = config['apiEndpoint'];
    const url = `${apiBase}${'tracks/search'}`

    let params = new HttpParams();
    params = params.append('text', text);

    return this.http.get(url, { params });
  }
}
