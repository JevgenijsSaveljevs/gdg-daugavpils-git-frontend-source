import { JoinTrackArtistsPipe } from './join-track-artists.pipe';

describe('JoinTrackArtistsPipe', () => {
  it('create an instance', () => {
    const pipe = new JoinTrackArtistsPipe();
    expect(pipe).toBeTruthy();
  });
});
