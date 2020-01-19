import { Pipe, PipeTransform } from '@angular/core';
import { Artist } from '../models/artist';

@Pipe({
  name: 'artistImage'
})
export class ArtistImagePipe implements PipeTransform {

  transform(artist: Artist, ...args: any[]): any {
    return artist.images[0].url
  }

}
