import { Component ***REMOVED*** from '@angular/core';
import { CommonModule ***REMOVED*** from '@angular/common';
import { RouterOutlet ***REMOVED*** from '@angular/router';
import { FooterComponent ***REMOVED*** from './components/includes/footer/footer.component';
import { HeaderComponent ***REMOVED*** from './components/includes/header/header.component';
import { HomeComponent ***REMOVED*** from './components/home/home.component';
import { ToastrModule, ToastrService ***REMOVED*** from 'ngx-toastr';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
***REMOVED***CommonModule,
***REMOVED***RouterOutlet,
***REMOVED***FooterComponent,
***REMOVED***HeaderComponent,
***REMOVED***HomeComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
***REMOVED***
export class AppComponent {
  title = 'imdb-App';

  constructor(private toastr:ToastrService) {
***REMOVED***


  

***REMOVED***
