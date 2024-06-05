import { ComponentFixture, TestBed ***REMOVED*** from '@angular/core/testing';

import { SliderComponent ***REMOVED*** from './slider.component';

describe('SliderComponent', () => {
  let component: SliderComponent;
  let fixture: ComponentFixture<SliderComponent>;

  beforeEach(async () => {
***REMOVED***await TestBed.configureTestingModule({
***REMOVED***  imports: [SliderComponent]
***REMOVED******REMOVED***
***REMOVED***.compileComponents();
***REMOVED***
***REMOVED***fixture = TestBed.createComponent(SliderComponent);
***REMOVED***component = fixture.componentInstance;
***REMOVED***fixture.detectChanges();
  ***REMOVED***;

  it('should create', () => {
***REMOVED***expect(component).toBeTruthy();
  ***REMOVED***;
***REMOVED***;
