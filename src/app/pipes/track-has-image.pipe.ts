import { Pipe, PipeTransform } from '@angular/core';
import { Track } from '../models/track';

@Pipe({
  name: 'trackHasImage'
})
export class TrackHasImagePipe implements PipeTransform {

  transform(track: Track, ...args: any[]): any {
    if (!track || !track.album || !track.album.images || track.album.images.length < 1) {
      return false;
    }

    return true;
  }

}
