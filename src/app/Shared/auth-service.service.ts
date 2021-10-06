import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '../Model/user';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  model!:User;
  url='https://localhost:44371/api';
  constructor(private http:HttpClient,private router:Router) { }

  loginUser(Email:string,Password:string):Observable<User>{
    return this.http.get<User>(this.url+'/User/Login?email='+Email+'&password='+Password).
    pipe(map(res => this.model=res as User));
  }
  
    registerUser(data:User)
  {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) }; 
    return this.http.post<boolean>(this.url+'/User/SignUp',data,httpOptions);
  }

   check():boolean
   {
      return this.model.IsAdmin;
   }


   logout(){
    localStorage.clear();
    this.router.navigate(['/']);
  }


}
