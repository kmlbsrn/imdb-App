import { Component, Input ***REMOVED*** from '@angular/core';
import { MatTabsModule ***REMOVED*** from '@angular/material/tabs';
import { MovieVideo ***REMOVED*** from '../../../models/movies/movieModel.inteface';

@Component({
  selector: 'app-video-list',
  standalone: true,
  imports: [MatTabsModule],
  templateUrl: './video-list.component.html',
  styleUrl: './video-list.component.scss'
***REMOVED***
export class VideoListComponent {


  @Input() title: string = '';
  @Input() videos: MovieVideo[] = [];

  constructor() {***REMOVED***


  ngOnInit() {
***REMOVED***console.log(this.videos);
***REMOVED***console.log(this.title);
***REMOVED***

  openVideoDialog(video: MovieVideo) {
***REMOVED***console.log(video);
***REMOVED***

***REMOVED***
