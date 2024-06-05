import { ComponentFixture, TestBed ***REMOVED*** from '@angular/core/testing';

import { MovieDetailsComponent ***REMOVED*** from './movie-details.component';

describe('MovieDetailsComponent', () => {
  let component: MovieDetailsComponent;
  let fixture: ComponentFixture<MovieDetailsComponent>;

  beforeEach(async () => {
***REMOVED***await TestBed.configureTestingModule({
***REMOVED***  imports: [MovieDetailsComponent]
***REMOVED******REMOVED***
***REMOVED***.compileComponents();
***REMOVED***
***REMOVED***fixture = TestBed.createComponent(MovieDetailsComponent);
***REMOVED***component = fixture.componentInstance;
***REMOVED***fixture.detectChanges();
  ***REMOVED***;

  it('should create', () => {
***REMOVED***expect(component).toBeTruthy();
  ***REMOVED***;
***REMOVED***;
