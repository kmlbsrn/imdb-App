import { Component ***REMOVED*** from '@angular/core';
import { ActivatedRoute ***REMOVED*** from '@angular/router';
import { MovieService ***REMOVED*** from '../../services/movie.service';
import { CommonModule ***REMOVED*** from '@angular/common';
import { SubSink ***REMOVED*** from 'subsink';
import { Cast, MovieVideo ***REMOVED*** from '../../models/movies/movieModel.inteface';
import { DomSanitizer ***REMOVED*** from '@angular/platform-browser';
import { MatTabsModule ***REMOVED*** from '@angular/material/tabs';
import {MatDialog, MatDialogModule***REMOVED*** from '@angular/material/dialog';
import { VideoComponent ***REMOVED*** from './video/video.component';

@Component({
  selector: 'app-movie-details',
  standalone: true,
  imports: [CommonModule,MatTabsModule,MatDialogModule],
  templateUrl: './movie-details.component.html',
  styleUrl: './movie-details.component.scss',
***REMOVED***
export class MovieDetailsComponent {
  movieId: number = 0;
  movieDetails: any;
  movieVideos: MovieVideo[] = {***REMOVED*** as MovieVideo[];
  trailers: MovieVideo[] = [];
  behindTheScenes: MovieVideo[] = [];

  cast : Cast[] = {***REMOVED*** as Cast[];



  private subs = new SubSink();

  constructor(
***REMOVED***private route: ActivatedRoute,
***REMOVED***private movieService: MovieService,
***REMOVED***public dialog: MatDialog
  ) {***REMOVED***

  ngOnInit() {
   this.subs.sink = this.route.paramMap.subscribe((params) => {
***REMOVED***  this.movieId = Number(params.get('id'));
***REMOVED******REMOVED***;

***REMOVED***this.subs.sink = this.movieService.getMovieDetail(this.movieId).subscribe((data) => {
***REMOVED***  this.movieDetails = data;
***REMOVED***  console.log(this.movieDetails);
***REMOVED******REMOVED***;

***REMOVED***this.subs.sink = this.movieService.getMovieVideos(this.movieId).subscribe((data) => {
***REMOVED***  
***REMOVED***  this.movieVideos = data.results;
***REMOVED***  console.log(this.movieVideos);

***REMOVED***  console.log(this.movieVideos);
***REMOVED***  this.trailers = this.getTrailers();
***REMOVED*** this.behindTheScenes = this.getBehindTheScenes();


***REMOVED******REMOVED***;

***REMOVED***this.subs.sink = this.movieService.getCasts(this.movieId).subscribe((data) => {
***REMOVED***  
***REMOVED***  this.cast = data.cast;
***REMOVED*** 
***REMOVED******REMOVED***;
***REMOVED***
***REMOVED***

  ngOnDestroy() {
***REMOVED***this.subs.unsubscribe();
***REMOVED***

  getTrailers():MovieVideo[]{
***REMOVED***return this.movieVideos.filter((video) => video.type === 'Trailer');
***REMOVED***;

  getClips():MovieVideo[]{
***REMOVED***return this.movieVideos.filter((video) => video.type === 'Clip');
***REMOVED***;


  getBehindTheScenes(): MovieVideo[]{
***REMOVED***return this.movieVideos.filter((video) => video.type === 'Behind the Scenes');
***REMOVED***

  

  showTrailers(){
  
***REMOVED***this.trailers = this.getTrailers();
***REMOVED***console.log(this.trailers);

***REMOVED***


  openVideoDialog(video: MovieVideo) {
***REMOVED***this.dialog.open(VideoComponent, {
***REMOVED***  data: video,
***REMOVED***  width: '800px',
***REMOVED***  height: '450px',
***REMOVED******REMOVED***;
***REMOVED***

***REMOVED***
