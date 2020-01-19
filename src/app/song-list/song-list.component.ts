import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { getMatInputUnsupportedTypeError } from '@angular/material/input';
import { Track } from '../models/track';

@Component({
  selector: 'app-song-list',
  templateUrl: './song-list.component.html',
  styleUrls: ['./song-list.component.scss']
})
export class SongListComponent implements OnInit {

  @Output() trackSelected: EventEmitter<Track> = new EventEmitter<Track>();
  @Input() tracks: any;
  constructor() { }

  ngOnInit() {
  }

  onCardClicked(track: Track) {
    this.trackSelected.emit(track);
  }

}
