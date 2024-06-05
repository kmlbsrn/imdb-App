import { Component, Inject ***REMOVED*** from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef ***REMOVED*** from '@angular/material/dialog';
import { MovieVideo ***REMOVED*** from '../../../models/movies/movieModel.inteface';
import { DomSanitizer, SafeResourceUrl ***REMOVED*** from '@angular/platform-browser';

@Component({
  selector: 'app-video-dialog',
  standalone: true,
  imports: [],
  templateUrl: './video-dialog.component.html',
  styleUrl: './video-dialog.component.scss'
***REMOVED***
export class VideoDialogComponent {
  videoUrl: SafeResourceUrl | undefined;

  constructor(
***REMOVED***public dialogRef: MatDialogRef<VideoDialogComponent>,
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
