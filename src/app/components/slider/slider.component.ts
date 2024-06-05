import { Component, Input ***REMOVED*** from '@angular/core';
import { MovieService ***REMOVED*** from '../../services/movie.service';
import { Movie, NowPlaying ***REMOVED*** from '../../models/movies/movieModel.inteface';
import { delay ***REMOVED*** from 'rxjs';
import { animate, style, transition, trigger ***REMOVED*** from '@angular/animations';
import { CommonModule ***REMOVED*** from '@angular/common';
import { RouterLink ***REMOVED*** from '@angular/router';

@Component({
  selector: 'app-slider',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.scss',
  animations: [
***REMOVED***trigger('fade', [
***REMOVED***  transition('void => *', [
***REMOVED******REMOVED***style({ opacity: 0 ***REMOVED***,
***REMOVED******REMOVED***animate('300ms', style({ opacity: 1 ***REMOVED***),
***REMOVED***  ]),
***REMOVED***  transition('* => void', [
***REMOVED******REMOVED***style({ opacity: 1 ***REMOVED***,
***REMOVED******REMOVED***animate('300ms', style({ opacity: 0 ***REMOVED***),
***REMOVED***  ]),
***REMOVED***]),
  ],
***REMOVED***
export class SliderComponent {
  

  constructor(private movieService: MovieService) {***REMOVED***

  currentSlide = 0;

  @Input() movies : Movie[] = [];  

  ngOnInit() {
***REMOVED***this.sliderTimer();
***REMOVED***

  // getNowPlayingMovies(page: number) {
  //   this.movieService
  //***REMOVED*** .getNowPlaying(page)
  //***REMOVED*** .pipe(delay(2000))
  //***REMOVED*** .subscribe((data) => {
***REMOVED******REMOVED***
  //***REMOVED***   console.log(data);
  //***REMOVED***   this.movies = data.results;
  //***REMOVED***   console.log(this.movies);
***REMOVED******REMOVED***
  //***REMOVED*** ***REMOVED***;
  // ***REMOVED***

  sliderTimer() {
***REMOVED***setInterval(() => {
***REMOVED***  this.currentSlide = ++this.currentSlide % this.movies.length;
  ***REMOVED***, 5000);
***REMOVED***
***REMOVED***
