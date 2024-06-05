import { TestBed ***REMOVED*** from '@angular/core/testing';

import { MovieService ***REMOVED*** from './movie.service';

describe('MovieService', () => {
  let service: MovieService;

  beforeEach(() => {
***REMOVED***TestBed.configureTestingModule({***REMOVED***;
***REMOVED***service = TestBed.inject(MovieService);
  ***REMOVED***;

  it('should be created', () => {
***REMOVED***expect(service).toBeTruthy();
  ***REMOVED***;
***REMOVED***;
