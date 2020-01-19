import { Component } from '@angular/core';
import { SpotifyService } from './services/spotify.service';
import { Subject } from 'rxjs';
import { debounceTime, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'audio-features-app';
  searchTextChanged$ = new Subject<string>();
  searchText = null;
  refreshSearchResults$: any;
  artists: any[];
  tracks: any[];

  constructor(private spotifyService: SpotifyService) {
    this.refreshSearchResults$ = this.searchTextChanged$
      .pipe(
        debounceTime(300),
        // switchMap((text) => {
        //   return this.spotifyService
        //     .search(text)
        // })
        
      )
      .subscribe(text => {
        this.spotifyService
            .search(text)
            .subscribe({
              next: (data) => {
                this.artists = data['artists'].items;
                this.tracks = data['tracks'].items;
                console.log('data', data)
              }, 
              error: (error) => {
                console.log('err', error)
              }
            })
      })
  }

  onSearchTextChange(text) {
    this.searchTextChanged$
      .next(text)
    // .pipe(
    //   debounceTime(300)
    // )


    console.log('event', event);
  }


}
