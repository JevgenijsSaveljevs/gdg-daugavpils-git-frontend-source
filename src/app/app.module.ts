import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { AppLoadModule } from './app-load/app-load.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ArtistListComponent } from './artist-list/artist-list.component';
import { ArtistHasImagePipe } from './pipes/artist-has-image.pipe';
import { ArtistImagePipe } from './pipes/artist-image.pipe';
import { ArtistHasGenresPipe } from './pipes/artist-has-genres.pipe';
import { ArtistGenresPipe } from './pipes/artist-genres.pipe';
import { MatChipsModule } from '@angular/material/chips';
import { SongListComponent } from './song-list/song-list.component';
import { TrackHasImagePipe } from './pipes/track-has-image.pipe';
import { TrackImagePipe } from './pipes/track-image.pipe';
import { JoinTrackArtistsPipe } from './pipes/join-track-artists.pipe';
import { FeatureChartComponent } from './feature-chart/feature-chart.component';
import { ChartsModule } from 'ng2-charts';
import { MatButtonModule } from '@angular/material/button';
import { SimpleNotificationsModule } from 'angular2-notifications';
import {MatRippleModule} from '@angular/material/core';

@NgModule({
  declarations: [
    AppComponent,
    ArtistListComponent,
    ArtistHasImagePipe,
    ArtistImagePipe,
    ArtistHasGenresPipe,
    ArtistGenresPipe,
    SongListComponent,
    TrackHasImagePipe,
    TrackImagePipe,
    JoinTrackArtistsPipe,
    FeatureChartComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatInputModule,
    AppLoadModule,
    HttpClientModule,
    MatChipsModule,
    ChartsModule,
    MatButtonModule,
    SimpleNotificationsModule.forRoot(),
    MatRippleModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
