import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Movie } from '../../Model/movie';
import { MovieService } from '../../Shared/movie.service';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {
  movies : Movie[] = [];
  p:any;
  constructor( private router : Router,public MovieService:MovieService) { }

  ngOnInit() {

      this.MovieService.getMovies().subscribe((data) => {
        data.forEach(x => {
          x.ImageUrl = x.ImageUrl.replace("C:\\fakepath\\","");
        });
        this.movies = data as Movie[]
      
      
      });
      
  }
   
}
