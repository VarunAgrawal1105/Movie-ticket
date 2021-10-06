import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../Shared/auth-service.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private AuthService: AuthServiceService) { }

  ngOnInit(): void {
  }
  onLogOut()
  {
    this.AuthService.logout();
  }

}
