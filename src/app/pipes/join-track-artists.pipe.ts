import { Pipe, PipeTransform } from '@angular/core';
import { Track } from '../models/track';

@Pipe({
  name: 'joinTrackArtists'
})
export class JoinTrackArtistsPipe implements PipeTransform {

  transform(track: Track, ...args: any[]): any {
    return track.artists.map(x => x.name).join("; ");
  }

}
