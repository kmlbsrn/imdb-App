import { Component ***REMOVED*** from '@angular/core';
import { AuthService ***REMOVED*** from '../../../services/auth.service';
import { FormControl, FormGroup, ReactiveFormsModule ***REMOVED*** from '@angular/forms';
import { MatDialogRef ***REMOVED*** from '@angular/material/dialog';
import { ToastrService ***REMOVED*** from 'ngx-toastr';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
***REMOVED***
export class LoginComponent {


constructor(private authService:AuthService,public dialogRef: MatDialogRef<LoginComponent>,private toastr:ToastrService) {***REMOVED***

  

  loginForms = new FormGroup({
***REMOVED***email: new FormControl(''),
***REMOVED***password:new FormControl('')
  ***REMOVED***;
  

  onSubmit() {
***REMOVED***console.log('buraya geliyor')
***REMOVED***this.authService.loginUser(this.loginForms.value.email || '', this.loginForms.value.password || '').subscribe({
***REMOVED***  next: (res) => {
***REMOVED******REMOVED***this.toastr.success('Success!',`Welcome`)
***REMOVED******REMOVED***localStorage.setItem('idToken', res.idToken);
***REMOVED******REMOVED***this.dialogRef.close();
***REMOVED******REMOVED***
***REMOVED******REMOVED***
***REMOVED***
  
  
***REMOVED***
