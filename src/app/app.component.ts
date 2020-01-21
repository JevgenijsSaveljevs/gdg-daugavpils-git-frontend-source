import { Component } from '@angular/core';
import { SpotifyService } from './services/spotify.service';
import { Subject } from 'rxjs';
import { debounceTime, switchMap } from 'rxjs/operators';
import { Artist } from './models/artist';
import { Track } from './models/track';
import { NotificationsService } from 'angular2-notifications';

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
  selectedTrack: Track;

  constructor(private spotifyService: SpotifyService,
    private notificationsService: NotificationsService) {
    this.refreshSearchResults$ = this.searchTextChanged$
      .pipe(
        debounceTime(300),
        // switchMap((text) => {
        //   return this.spotifyService
        //     .search(text)
        // })

      )
      .subscribe(text => {
        if (text) {
          this.spotifyService
            .search(text)
            .subscribe({
              next: (data) => {
                this.artists = data['artists'].items;
                this.tracks = data['tracks'].items;
                console.log('data', data)
              },
              error: (error) => {
                this.notificationsService.error(error.message || error.statusText);
                console.log('err', error)
              }
            })
        } else {
          this.artists = [];
          this.tracks = [];
        }
      })
  }

  ontrackSelected(track: Track) {
    this.selectedTrack = track;
  }

  onSearchTextChange(text) {
    this.searchTextChanged$
      .next(text)

    console.log('event', event);
  }


}
