import { ArtistHasGenresPipe } from './artist-has-genres.pipe';

describe('ArtistHasGenresPipe', () => {
  it('create an instance', () => {
    const pipe = new ArtistHasGenresPipe();
    expect(pipe).toBeTruthy();
  });
});
