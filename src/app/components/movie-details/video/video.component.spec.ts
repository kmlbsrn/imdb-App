import { ComponentFixture, TestBed ***REMOVED*** from '@angular/core/testing';

import { VideoComponent ***REMOVED*** from './video.component';

describe('VideoComponent', () => {
  let component: VideoComponent;
  let fixture: ComponentFixture<VideoComponent>;

  beforeEach(async () => {
***REMOVED***await TestBed.configureTestingModule({
***REMOVED***  imports: [VideoComponent]
***REMOVED******REMOVED***
***REMOVED***.compileComponents();
***REMOVED***
***REMOVED***fixture = TestBed.createComponent(VideoComponent);
***REMOVED***component = fixture.componentInstance;
***REMOVED***fixture.detectChanges();
  ***REMOVED***;

  it('should create', () => {
***REMOVED***expect(component).toBeTruthy();
  ***REMOVED***;
***REMOVED***;
