import { ExternalUrls } from './external-urls';
import { AlbumDescription } from './album-description';
import { ArtistDescription } from './artist-description';
import { ExternalIds } from './external-ids';

export interface Track {
    album: AlbumDescription;
    artists: ArtistDescription[];
    available_markets: string[];
    disc_number: number;
    duration_ms: number;
    explicit: boolean;
    external_ids: ExternalIds;
    external_urls: ExternalUrls;
    href: string;
    id: string;
    is_local: boolean;
    name: string;
    popularity: number;
    preview_url: string;
    track_number: number;
    type: string;
    uri: string;
}
