import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Movie } from '../../Model/movie';
import { MovieScreen } from '../../Model/screen';
import { MovieService } from '../../Shared/movie.service';

@Component({
  selector: 'app-movie-booking',
  templateUrl: './movie-booking.component.html',
  styleUrls: ['./movie-booking.component.css']
})
export class MovieBookingComponent implements OnInit {
 movie !:Movie
 
 ScreenModel !:MovieScreen[]
  constructor(private route : ActivatedRoute,private router : Router,public MovieService :MovieService,private fb:FormBuilder) { }
  
  ngOnInit() {
    
    this.movie = new Movie();
    this.route.params.subscribe((param : Params) =>
    {
       let MovieId = param.MovieId;
       if(!MovieId)
       {
        console.log("Invalid id "); 
        return;
       }

       this.MovieService.getMovie(MovieId).subscribe((data) =>{
        data.ImageUrl = data.ImageUrl.replace("C:\\fakepath\\","");
        this.movie = data as Movie;
       });
       this.MovieService.getMovieShowTime(MovieId).subscribe((data) => {
       this.ScreenModel = data as MovieScreen[];
       });
       
    })

  }

}
