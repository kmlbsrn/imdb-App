import { Component, OnDestroy, OnInit, TrackByFunction ***REMOVED*** from '@angular/core';
import { ActivatedRoute ***REMOVED*** from '@angular/router';
import { MovieService ***REMOVED*** from '../../services/movie.service';
import { CommonModule ***REMOVED*** from '@angular/common';
import { SubSink ***REMOVED*** from 'subsink';
import { Cast, MovieDetail, MovieVideo ***REMOVED*** from '../../models/movies/movieModel.inteface';
import { MatTabsModule ***REMOVED*** from '@angular/material/tabs';
import { MatDialog, MatDialogModule ***REMOVED*** from '@angular/material/dialog';
import { VideoDialogComponent ***REMOVED*** from './video-dialog/video-dialog.component';
import { VideoListComponent ***REMOVED*** from './video-list/video-list.component';
import { switchMap ***REMOVED*** from 'rxjs/operators';

@Component({
  selector: 'app-movie-details',
  standalone: true,
  imports: [CommonModule, MatTabsModule, MatDialogModule, VideoListComponent],
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss'],
***REMOVED***
export class MovieDetailsComponent implements OnInit, OnDestroy {
  movieId: number = 0;
  movieDetails: MovieDetail = {***REMOVED*** as MovieDetail;
  movieVideos: MovieVideo[] = [];
  trailers: MovieVideo[] = [];
  behindTheScenes: MovieVideo[] = [];
  showTrailers = false;
  showBehindTheScenes = false;

  cast: Cast[] = [];

  private subs = new SubSink();

  constructor(
***REMOVED***private route: ActivatedRoute,
***REMOVED***private movieService: MovieService,
***REMOVED***public dialog: MatDialog
  ) {***REMOVED***

  ngOnInit() {
***REMOVED***this.subs.sink = this.route.paramMap.pipe(
***REMOVED***  switchMap(params => {
***REMOVED******REMOVED***this.movieId = Number(params.get('id'));
***REMOVED******REMOVED***return this.movieService.getMovieDetail(this.movieId);
***REMOVED***  ***REMOVED***
***REMOVED***).subscribe(data => {
***REMOVED***  this.movieDetails = data;
***REMOVED******REMOVED***;

***REMOVED***this.subs.sink = this.route.paramMap.pipe(
***REMOVED***  switchMap(params => {
***REMOVED******REMOVED***this.movieId = Number(params.get('id'));
***REMOVED******REMOVED***return this.movieService.getMovieVideos(this.movieId);
***REMOVED***  ***REMOVED***
***REMOVED***).subscribe(data => {
***REMOVED***  this.movieVideos = data.results;
***REMOVED***  this.trailers = this.getTrailers();
***REMOVED***  this.showTrailers = this.trailers.length > 0;
***REMOVED***  this.behindTheScenes = this.getBehindTheScenes();
***REMOVED***  this.showBehindTheScenes = this.behindTheScenes.length > 0;
***REMOVED***  
***REMOVED******REMOVED***;

***REMOVED***this.subs.sink = this.route.paramMap.pipe(
***REMOVED***  switchMap(params => {
***REMOVED******REMOVED***this.movieId = Number(params.get('id'));
***REMOVED******REMOVED***return this.movieService.getCasts(this.movieId);
***REMOVED***  ***REMOVED***
***REMOVED***).subscribe(data => {
***REMOVED***  this.cast = data.cast;
***REMOVED******REMOVED***;
***REMOVED***

  ngOnDestroy() {
***REMOVED***this.subs.unsubscribe();
***REMOVED***

  getTrailers(): MovieVideo[] {
***REMOVED***return this.movieVideos.filter((video) => video.type === 'Trailer');
***REMOVED***

  getClips(): MovieVideo[] {
***REMOVED***return this.movieVideos.filter((video) => video.type === 'Clip');
***REMOVED***

  getBehindTheScenes(): MovieVideo[] {
***REMOVED***return this.movieVideos.filter(
***REMOVED***  (video) => video.type === 'Behind the Scenes'
***REMOVED***
***REMOVED***

  openVideoDialog(video: MovieVideo) {
***REMOVED***this.dialog.open(VideoDialogComponent, {
***REMOVED***  data: video,
***REMOVED***  width: '800px',
***REMOVED***  height: '450px',
***REMOVED******REMOVED***;
***REMOVED***
***REMOVED***
