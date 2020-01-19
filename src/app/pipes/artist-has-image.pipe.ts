import { Pipe, PipeTransform } from '@angular/core';
import { Artist } from '../models/artist';

@Pipe({
  name: 'artistHasImage'
})
export class ArtistHasImagePipe implements PipeTransform {

  transform(artist: Artist, ...args: any[]): any {
    if (!artist || !artist.images || artist.images.length < 1) {
      return false;
    }

    return true;
  }

}
