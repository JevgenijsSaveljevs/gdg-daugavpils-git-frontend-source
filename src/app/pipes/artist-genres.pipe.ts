import { Pipe, PipeTransform } from '@angular/core';
import { Artist } from '../models/artist';

@Pipe({
  name: 'artistGenres'
})
export class ArtistGenresPipe implements PipeTransform {

  transform(artist: Artist, ...args: any[]): any {
    if (!artist || !artist.genres || artist.genres.length < 1) {
      return '';
    }

    return artist.genres
      .join("; ")
  }

}
