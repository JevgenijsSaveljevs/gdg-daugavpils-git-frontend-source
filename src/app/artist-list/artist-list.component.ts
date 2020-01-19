import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Artist } from '../models/artist';

@Component({
  selector: 'app-artist-list',
  templateUrl: './artist-list.component.html',
  styleUrls: ['./artist-list.component.scss']
})
export class ArtistListComponent implements OnInit {

  @Input() artists: Artist[];
  @Output() trackSelected: EventEmitter<Artist> = new EventEmitter<Artist>();
  constructor() { }

  ngOnInit() {
  }

  onCardClicked(artist: Artist) {
    this.trackSelected.emit(artist);
  }

}
