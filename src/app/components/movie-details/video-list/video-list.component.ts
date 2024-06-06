import { Component, Input ***REMOVED*** from '@angular/core';
import { MatTabsModule ***REMOVED*** from '@angular/material/tabs';
import { MovieVideo ***REMOVED*** from '../../../models/movies/movieModel.inteface';
import { MovieService ***REMOVED*** from '../../../services/movie.service';
import { SubSink ***REMOVED*** from 'subsink';
import { MatDialog ***REMOVED*** from '@angular/material/dialog';
import { VideoDialogComponent ***REMOVED*** from '../video-dialog/video-dialog.component';

@Component({
  selector: 'app-video-list',
  standalone: true,
  imports: [MatTabsModule],
  templateUrl: './video-list.component.html',
  styleUrl: './video-list.component.scss',
***REMOVED***
export class VideoListComponent {
  @Input() title: string = '';
  @Input() movieId: number = 0;

  videos: MovieVideo[] = [];
  showVideos = false;

  constructor(private movieService: MovieService,public dialog: MatDialog) {***REMOVED***

  ngOnInit() {
***REMOVED***console.log(this.movieId);
***REMOVED***this.getVideoById(this.movieId);
***REMOVED***console.log(this.title);
***REMOVED***

  ngOnDestroy() {
***REMOVED***this.subs.unsubscribe();
***REMOVED***

  private subs = new SubSink();

  getVideoById(id: number) {
***REMOVED***this.subs.sink = this.movieService.getMovieVideos(id).subscribe((data) => {
***REMOVED***  console.log(data);
***REMOVED***  this.videos = data.results;
***REMOVED***  if (this.title) {
***REMOVED******REMOVED***this.showVideos = true;
***REMOVED******REMOVED***this.setVideoType(this.title);
***REMOVED******REMOVED***
***REMOVED******REMOVED***
***REMOVED******REMOVED***;
***REMOVED***

  

  setVideoType(type: string): void {
***REMOVED***console.log(type);
***REMOVED***switch (type) {
***REMOVED***  case 'Trailers':
***REMOVED******REMOVED***this.videos = this.getTrailers();
***REMOVED******REMOVED***break;
***REMOVED***  case 'Clip':
***REMOVED******REMOVED***this.videos = this.getClips();
***REMOVED******REMOVED***break;
***REMOVED***  case 'Behind The Scenes':
***REMOVED******REMOVED***this.videos = this.getBehindTheScenes();
***REMOVED******REMOVED***break;
***REMOVED***  default:
***REMOVED******REMOVED***this.videos = this.getTrailers();
***REMOVED******REMOVED***break;
  ***REMOVED***
***REMOVED***

  getTrailers(): MovieVideo[] {
***REMOVED***return this.videos.filter((video) => video.type === 'Trailer');
***REMOVED***

  getClips(): MovieVideo[] {
***REMOVED***return this.videos.filter((video) => video.type === 'Clip');
***REMOVED***

  getBehindTheScenes(): MovieVideo[] {
***REMOVED***return this.videos.filter((video) => video.type === 'Behind the Scenes');
***REMOVED***

  openVideoDialog(video: MovieVideo) {
***REMOVED***console.log(video);
***REMOVED***this.dialog.open(VideoDialogComponent, {
***REMOVED***  data: video,
***REMOVED***  width: '800px',
***REMOVED***  height: '450px',
***REMOVED******REMOVED***;
***REMOVED***
***REMOVED***
