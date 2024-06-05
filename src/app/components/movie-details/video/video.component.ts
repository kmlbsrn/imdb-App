import { Component, Inject, OnInit ***REMOVED*** from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA ***REMOVED*** from '@angular/material/dialog';
import { DomSanitizer, SafeResourceUrl ***REMOVED*** from '@angular/platform-browser';
import { MovieVideo ***REMOVED*** from '../../../models/movies/movieModel.inteface';


@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss'],
***REMOVED***
export class VideoComponent implements OnInit {
  videoUrl: SafeResourceUrl | undefined;

  constructor(
***REMOVED***public dialogRef: MatDialogRef<VideoComponent>,
***REMOVED***@Inject(MAT_DIALOG_DATA) public video: MovieVideo,
***REMOVED***private sanitizer: DomSanitizer
  ) {***REMOVED***

  ngOnInit() {
***REMOVED***this.videoUrl = this.getVideoUrl(this.video);
***REMOVED***

  getVideoUrl(video: MovieVideo) {
***REMOVED***console.log(video);
***REMOVED***console.log(video.id);
***REMOVED***return this.sanitizer.bypassSecurityTrustResourceUrl(
***REMOVED***  `https://www.youtube.com/embed/${video.key***REMOVED***`
***REMOVED***
***REMOVED***
***REMOVED***