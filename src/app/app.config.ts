import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // Add this import statement
import { HttpClientModule } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async'; // Add this import statement

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), 
    importProvidersFrom([BrowserModule, BrowserAnimationsModule, HttpClientModule]), provideAnimationsAsync(), // Add HttpClientModule to the list of imported providers
  ]
};
