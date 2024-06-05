import { TestBed ***REMOVED*** from '@angular/core/testing';
import { AppComponent ***REMOVED*** from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
***REMOVED***await TestBed.configureTestingModule({
***REMOVED***  imports: [AppComponent],
***REMOVED******REMOVED***.compileComponents();
  ***REMOVED***;

  it('should create the app', () => {
***REMOVED***const fixture = TestBed.createComponent(AppComponent);
***REMOVED***const app = fixture.componentInstance;
***REMOVED***expect(app).toBeTruthy();
  ***REMOVED***;

  it(`should have the 'imdb-App' title`, () => {
***REMOVED***const fixture = TestBed.createComponent(AppComponent);
***REMOVED***const app = fixture.componentInstance;
***REMOVED***expect(app.title).toEqual('imdb-App');
  ***REMOVED***;

  it('should render title', () => {
***REMOVED***const fixture = TestBed.createComponent(AppComponent);
***REMOVED***fixture.detectChanges();
***REMOVED***const compiled = fixture.nativeElement as HTMLElement;
***REMOVED***expect(compiled.querySelector('h1')?.textContent).toContain('Hello, imdb-App');
  ***REMOVED***;
***REMOVED***;
