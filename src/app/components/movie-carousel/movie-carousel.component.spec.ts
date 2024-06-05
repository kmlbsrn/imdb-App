import { ComponentFixture, TestBed ***REMOVED*** from '@angular/core/testing';

import { MovieCarouselComponent ***REMOVED*** from './movie-carousel.component';

describe('MovieCarouselComponent', () => {
  let component: MovieCarouselComponent;
  let fixture: ComponentFixture<MovieCarouselComponent>;

  beforeEach(async () => {
***REMOVED***await TestBed.configureTestingModule({
***REMOVED***  imports: [MovieCarouselComponent]
***REMOVED******REMOVED***
***REMOVED***.compileComponents();
***REMOVED***
***REMOVED***fixture = TestBed.createComponent(MovieCarouselComponent);
***REMOVED***component = fixture.componentInstance;
***REMOVED***fixture.detectChanges();
  ***REMOVED***;

  it('should create', () => {
***REMOVED***expect(component).toBeTruthy();
  ***REMOVED***;
***REMOVED***;
