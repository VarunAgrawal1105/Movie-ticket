import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Movie } from 'src/app/Model/movie';
import { AuthServiceService } from 'src/app/Shared/auth-service.service';
import { MovieService } from 'src/app/Shared/movie.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {
  movies:Movie[] =[];
  constructor(public MovieService : MovieService, private route : ActivatedRoute,
    private router : Router,public AuthService : AuthServiceService) {}

  ngOnInit() {
    
    this.MovieService.getMovies().subscribe((data) => this.movies = data as Movie[])
  }


  editMovie(MovieId : number)
  {
     this.router.navigate(['/edit/movie',MovieId])
  }

  deleteMovie(MovieId : number)
  {
     this.MovieService.deleteMovie(MovieId).subscribe((data) =>{
       if(data)
       {
         alert("Deleted Successfully");
       }
      },
       (err)=>{
       
         alert("Sorry there is some error deleting this");
       }
     )
  }

  onLogOut()
  {
    this.AuthService.logout();
  }

}
