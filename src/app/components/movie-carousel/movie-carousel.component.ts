import { Component, Input ***REMOVED*** from '@angular/core';
import { CarouselModule ***REMOVED*** from 'primeng/carousel';
import { MovieService ***REMOVED*** from '../../services/movie.service';
import { Movie ***REMOVED*** from '../../models/movies/movieModel.inteface';
import { HttpClientModule ***REMOVED*** from '@angular/common/http';
import { RouterLink ***REMOVED*** from '@angular/router';

@Component({
  selector: 'app-movie-carousel',
  standalone: true,
  imports: [CarouselModule, HttpClientModule, RouterLink],
  templateUrl: './movie-carousel.component.html',
  styleUrl: './movie-carousel.component.scss',
***REMOVED***
export class MovieCarouselComponent {
  responsiveOptions: any[] = [
***REMOVED***{
***REMOVED***  breakpoint: '1024px',
***REMOVED***  numVisible: 3,
***REMOVED***  numScroll: 3,
  ***REMOVED***,
***REMOVED***{
***REMOVED***  breakpoint: '768px',
***REMOVED***  numVisible: 2,
***REMOVED***  numScroll: 2,
  ***REMOVED***,
***REMOVED***{
***REMOVED***  breakpoint: '560px',
***REMOVED***  numVisible: 1,
***REMOVED***  numScroll: 1,
  ***REMOVED***,
  ];

  @Input() nowPlayingMovies: Movie[] = [];

  constructor() {***REMOVED***

  ngOnInit() {***REMOVED***
***REMOVED***
