import { Component ***REMOVED*** from '@angular/core';
import { MovieCarouselComponent ***REMOVED*** from '../movie-carousel/movie-carousel.component';
import { SliderComponent ***REMOVED*** from '../slider/slider.component';
import { MovieService ***REMOVED*** from '../../services/movie.service';
import { Movie ***REMOVED*** from '../../models/movies/movieModel.inteface';
import { SubSink ***REMOVED*** from 'subsink';
import { delay ***REMOVED*** from 'rxjs';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MovieCarouselComponent,SliderComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
***REMOVED***
export class HomeComponent {




constructor(private movieService:MovieService) { ***REMOVED***

  nowPlayingMovies!: Movie[];
  
  
  private subs = new SubSink();
  
  ngOnInit() {
   
***REMOVED***this.getNowPlayingMovies();
   
***REMOVED***

  ngOnDestroy() {
***REMOVED***this.subs.unsubscribe();
***REMOVED***

  getNowPlayingMovies() {
***REMOVED***
***REMOVED***this.subs.sink = this.movieService.getNowPlaying(1).pipe(delay(2000)).subscribe((data) => {
***REMOVED******REMOVED***
***REMOVED******REMOVED***this.nowPlayingMovies = data.results;
***REMOVED******REMOVED***console.log(this.nowPlayingMovies);***REMOVED***
***REMOVED******REMOVED***;

***REMOVED***

***REMOVED***
