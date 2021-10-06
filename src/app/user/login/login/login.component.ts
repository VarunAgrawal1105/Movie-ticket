import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/Shared/auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  model!:any;
  currentUserId!:any;
  constructor(public AuthService:AuthServiceService,public router:Router) { }
   
  ngOnInit() {
  }

  onFormSubmit(data:any)
  {
    this.AuthService.loginUser(data.Email,data.Password)
              .subscribe((data) => { 
                  this.model = data;
                  this.currentUserId=data.UserId;
                  localStorage.setItem('SessionUser',this.currentUserId);
                  if(this.AuthService.check())
                  {
                    this.router.navigate(['/admin/dashboard']);
                  }
                  else
                  {
                    this.router.navigate(['/movie']);
                  }
                }
              ,(err)=>{
                  alert("Sorry,Invalid user!\n PLEASE CHECK EMAIL OR PASSWORD..");
              }); 
  }

}
