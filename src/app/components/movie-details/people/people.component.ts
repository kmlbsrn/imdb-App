import { Component, Input ***REMOVED*** from '@angular/core';
import { MovieService ***REMOVED*** from '../../../services/movie.service';
import { SubSink ***REMOVED*** from 'subsink';
import { Cast, Crew ***REMOVED*** from '../../../models/movies/movieModel.inteface';

@Component({
  selector: 'app-people',
  standalone: true,
  imports: [],
  templateUrl: './people.component.html',
  styleUrl: './people.component.scss'
***REMOVED***
export class PeopleComponent {

  @Input() title: string = '';
  @Input() movieId: number = 0;
  cast: Cast[] = [];
  crew: Crew[] = [];
  
  

  private subs= new SubSink();
  constructor(private movieService: MovieService) { ***REMOVED***
  
  ngOnInit() {
   
***REMOVED***switch (this.title) {
***REMOVED***  case 'Cast':
***REMOVED******REMOVED***this.getCast(this.movieId);
***REMOVED******REMOVED***break;
***REMOVED***  case 'Crew':
***REMOVED******REMOVED***this.getCrew(this.movieId);
***REMOVED******REMOVED***break;
***REMOVED***  default:
***REMOVED******REMOVED***break;
  ***REMOVED***
***REMOVED***

  getCast(id: number) {
***REMOVED***this.subs.sink = this.movieService.getCasts(id).subscribe((data) => {
***REMOVED***  this.cast = data.cast;
***REMOVED******REMOVED***;
***REMOVED***

  getCrew(id: number) {
***REMOVED***this.subs.sink = this.movieService.getCasts(id).subscribe((data) => {
***REMOVED***  this.crew = data.crew;
***REMOVED******REMOVED***;
***REMOVED***

***REMOVED***
