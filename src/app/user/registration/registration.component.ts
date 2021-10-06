import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/Model/user';
import { AuthServiceService } from 'src/app/Shared/auth-service.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  constructor( private router : Router,public AuthService:AuthServiceService) { }

  ngOnInit() {
  }

  onFormSubmit(data:User)
  {
    this.AuthService.registerUser(data)
    .subscribe((data) => { 
                              if(data){this.router.navigate(['/login']);}
                              else{alert("Email already exist !!");}
                         }              
              ,(err)=>{
                  alert("Sorry,Some error occurred");
                });         
  }

}
