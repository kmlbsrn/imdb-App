import { Component, ViewEncapsulation ***REMOVED*** from '@angular/core';
import { MatToolbarModule ***REMOVED*** from '@angular/material/toolbar';
import { MatButtonModule ***REMOVED*** from '@angular/material/button';
import { RouterModule ***REMOVED*** from '@angular/router';
import { MatDialog, MatDialogModule ***REMOVED*** from '@angular/material/dialog';
import { LoginComponent ***REMOVED*** from '../../auth/login/login.component';
import { MatSnackBar ***REMOVED*** from '@angular/material/snack-bar';
import { MatFormFieldModule ***REMOVED*** from '@angular/material/form-field';
import {MatIconModule***REMOVED*** from '@angular/material/icon';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatToolbarModule, MatButtonModule, RouterModule, MatDialogModule,MatFormFieldModule,MatIconModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
***REMOVED***
export class HeaderComponent {
  constructor(public dialog: MatDialog, private snackBar: MatSnackBar) {***REMOVED***

  openDialog() {
   this.dialog.open(LoginComponent, { width: '500px', height: '450px' ***REMOVED***;

***REMOVED***
***REMOVED***
