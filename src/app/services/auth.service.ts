***REMOVED***
***REMOVED***
***REMOVED***

***REMOVED***
***REMOVED***
***REMOVED***
export class AuthService {
  BASEURL = 'https://identitytoolkit.googleapis.com/v1';
  APIKEY = 'AIzaSyBEbniU1rs0KzmFRXByCHJwmHX_pQ11N-Q';

  constructor(private http: HttpClient) { ***REMOVED***
  
  registerUser(email:string,password:string):Observable<any> {
***REMOVED***
***REMOVED***const header = new HttpHeaders({ 'Content-Type': 'application/json' ***REMOVED***;
***REMOVED***return this.http.post(`${this.BASEURL***REMOVED***/accounts:signUp?key=${this.APIKEY***REMOVED***`, { email:email, password:password, returnSecureToken: true ***REMOVED***,{headers:header***REMOVED***;
***REMOVED***

  loginUser(email: string, password: string):Observable<any>{
   
***REMOVED***const header = new HttpHeaders({ 'Content-Type': 'application/json' ***REMOVED***;

***REMOVED***return this.http.post(`${this.BASEURL***REMOVED***/accounts:signInWithPassword?key=${this.APIKEY***REMOVED***`, { email:email, password:password, returnSecureToken: true ***REMOVED***,{headers:header***REMOVED***;


***REMOVED***

***REMOVED***
