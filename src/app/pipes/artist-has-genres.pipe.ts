import { Pipe, PipeTransform } from '@angular/core';
import { Artist } from '../models/artist';

@Pipe({
  name: 'artistHasGenres'
})
export class ArtistHasGenresPipe implements PipeTransform {

  transform(artist: Artist, ...args: any[]): any {
    if (!artist || !artist.genres || artist.genres.length < 1) {
      return false;
    }

    return true;
  }

}
