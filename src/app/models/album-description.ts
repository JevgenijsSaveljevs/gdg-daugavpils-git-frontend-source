import { Image } from './image';
import { ArtistDescription } from './artist-description';
import { ExternalUrls } from './external-urls';

export interface AlbumDescription {
    album_type: string;
    artists: ArtistDescription[];
    available_markets: string[];
    external_urls: ExternalUrls;
    href: string;
    id: string;
    images: Image[];
    name: string;
    release_date: string;
    release_date_precision: string;
    total_tracks: number;
    type: string;
    uri: string;
}
