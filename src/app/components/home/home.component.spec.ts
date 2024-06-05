import { ComponentFixture, TestBed ***REMOVED*** from '@angular/core/testing';

import { HomeComponent ***REMOVED*** from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
***REMOVED***await TestBed.configureTestingModule({
***REMOVED***  imports: [HomeComponent]
***REMOVED******REMOVED***
***REMOVED***.compileComponents();
***REMOVED***
***REMOVED***fixture = TestBed.createComponent(HomeComponent);
***REMOVED***component = fixture.componentInstance;
***REMOVED***fixture.detectChanges();
  ***REMOVED***;

  it('should create', () => {
***REMOVED***expect(component).toBeTruthy();
  ***REMOVED***;
***REMOVED***;
