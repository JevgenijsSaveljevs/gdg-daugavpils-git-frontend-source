import { Component, OnInit, Input } from '@angular/core';
import { getMatInputUnsupportedTypeError } from '@angular/material/input';

@Component({
  selector: 'app-song-list',
  templateUrl: './song-list.component.html',
  styleUrls: ['./song-list.component.scss']
})
export class SongListComponent implements OnInit {

  @Input() tracks: any;
  constructor() { }

  ngOnInit() {
  }

}
