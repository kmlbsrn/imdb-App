import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { MovieVideo } from '../../../models/movies/movieModel.inteface';


@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss'],
})
export class VideoComponent implements OnInit {
  videoUrl: SafeResourceUrl | undefined;

  constructor(
    public dialogRef: MatDialogRef<VideoComponent>,
    @Inject(MAT_DIALOG_DATA) public video: MovieVideo,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit() {
    this.videoUrl = this.getVideoUrl(this.video);
  }

  getVideoUrl(video: MovieVideo) {
    console.log(video);
    console.log(video.id);
    return this.sanitizer.bypassSecurityTrustResourceUrl(
      `https://www.youtube.com/embed/${video.key}`
    );
  }
}