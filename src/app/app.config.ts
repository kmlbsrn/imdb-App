import { ApplicationConfig, importProvidersFrom ***REMOVED*** from '@angular/core';
import { provideRouter ***REMOVED*** from '@angular/router';
import { routes ***REMOVED*** from './app.routes';
import { BrowserModule ***REMOVED*** from '@angular/platform-browser';
import { BrowserAnimationsModule ***REMOVED*** from '@angular/platform-browser/animations'; // Add this import statement
import { HttpClientModule ***REMOVED*** from '@angular/common/http';
import { provideAnimationsAsync ***REMOVED*** from '@angular/platform-browser/animations/async'; // Add this import statement

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), 
***REMOVED***importProvidersFrom([BrowserModule, BrowserAnimationsModule, HttpClientModule]), provideAnimationsAsync(), // Add HttpClientModule to the list of imported providers
  ]
***REMOVED***;
