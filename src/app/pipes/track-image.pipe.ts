import { Pipe, PipeTransform } from '@angular/core';
import { Track } from '../models/track';

@Pipe({
  name: 'trackImage'
})
export class TrackImagePipe implements PipeTransform {

  transform(track: Track, ...args: any[]): any {
    return track.album.images[0].url;
  }

}
