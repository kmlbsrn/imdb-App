import { ApplicationConfig, importProvidersFrom ***REMOVED*** from '@angular/core';
import { provideRouter ***REMOVED*** from '@angular/router';
import { routes ***REMOVED*** from './app.routes';
import { BrowserModule ***REMOVED*** from '@angular/platform-browser';
import {
  BrowserAnimationsModule,
  provideAnimations,
***REMOVED*** from '@angular/platform-browser/animations'; // Add this import statement
import { HttpClientModule ***REMOVED*** from '@angular/common/http';
import { provideAnimationsAsync ***REMOVED*** from '@angular/platform-browser/animations/async'; // Add this import statement
import { ToastrModule, provideToastr ***REMOVED*** from 'ngx-toastr';

export const appConfig: ApplicationConfig = {
  providers: [
***REMOVED***provideRouter(routes),
***REMOVED***importProvidersFrom([
***REMOVED***  BrowserModule,
***REMOVED***  BrowserAnimationsModule,
***REMOVED***  HttpClientModule,
***REMOVED***  ToastrModule.forRoot()
***REMOVED***]),
***REMOVED***provideAnimationsAsync(),
***REMOVED***provideAnimations(),
***REMOVED***provideToastr()// Add HttpClientModule to the list of imported providers
  ],
***REMOVED***;
