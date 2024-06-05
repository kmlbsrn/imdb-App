import { bootstrapApplication ***REMOVED*** from '@angular/platform-browser';
import { appConfig ***REMOVED*** from './app/app.config';
import { AppComponent ***REMOVED*** from './app/app.component';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
