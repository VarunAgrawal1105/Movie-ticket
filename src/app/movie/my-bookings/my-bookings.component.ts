import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Movie } from '../../Model/movie';
import { MovieService } from '../../Shared/movie.service';

@Component({
  selector: 'app-my-bookings',
  templateUrl: './my-bookings.component.html',
  styleUrls: ['./my-bookings.component.css']
})
export class MyBookingsComponent implements OnInit {
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
