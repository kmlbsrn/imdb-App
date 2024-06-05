
import { Component ***REMOVED*** from '@angular/core';
import {CarouselModule***REMOVED*** from 'primeng/carousel';
import { MovieService ***REMOVED*** from '../../services/movie.service';
import { Movie, NowPlaying ***REMOVED*** from '../../models/movies/movieModel.inteface';
import { HttpClientModule ***REMOVED*** from '@angular/common/http';
import { RouterLink ***REMOVED*** from '@angular/router';


@Component({
  selector: 'app-movie-carousel',
  standalone: true,
  imports: [CarouselModule,HttpClientModule,RouterLink],
  templateUrl: './movie-carousel.component.html',
  styleUrl: './movie-carousel.component.scss'
***REMOVED***
export class MovieCarouselComponent {

  responsiveOptions: any[] = [
***REMOVED***{
***REMOVED******REMOVED***breakpoint: '1024px',
***REMOVED******REMOVED***numVisible: 3,
***REMOVED******REMOVED***numScroll: 3
  ***REMOVED***,
***REMOVED***{
***REMOVED******REMOVED***breakpoint: '768px',
***REMOVED******REMOVED***numVisible: 2,
***REMOVED******REMOVED***numScroll: 2
  ***REMOVED***,
***REMOVED***{
***REMOVED******REMOVED***breakpoint: '560px',
***REMOVED******REMOVED***numVisible: 1,
***REMOVED******REMOVED***numScroll: 1
  ***REMOVED***
];

constructor(private movieService:MovieService) { ***REMOVED***

  nowPlayingMovies!: Movie[] ;
  
  
  ngOnInit() {
***REMOVED***console.log('MovieCarouselComponent');
***REMOVED***this.movieService.getNowPlaying(1).subscribe((data) => {
***REMOVED***  this.nowPlayingMovies = data.results;
***REMOVED***  console.log(this.nowPlayingMovies);
***REMOVED******REMOVED***;
***REMOVED***
***REMOVED***
