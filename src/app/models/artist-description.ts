import { ExternalUrls } from './external-urls';

export interface ArtistDescription {
    external_urls: ExternalUrls;
    href: string;
    id: string;
    name: string;
    type: string;
    uri: string;
}
