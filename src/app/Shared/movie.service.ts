import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from '../Model/movie';
import { map,catchError } from "rxjs/operators";
import { MovieScreen } from '../Model/screen';
@Injectable({
  providedIn: 'root'
})
export class MovieService {
  url='https://localhost:44371/api';
  photoUrl = 'https://localhost:44371/Photos';
  constructor(private http:HttpClient) { }

  getMovies(): Observable<Movie[]>
  {
    return this.http.get(this.url+'/Movie/GetMovies').
    pipe(map(res => res as Movie[]));
  }

  uploadPhoto(val : any)
  { 
    return this.http.post(this.url+'/Movie/SaveFile',val);
  }

  addMovie(data : Movie)
  {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) }; 
    return this.http.post<boolean>(this.url+'/Movie/AddMovies',data,httpOptions);

  }

  getMovie(MovieId:number) : Observable<Movie>
  {
    return this.http.get(this.url+'/Movie/GetMovie?MovieId='+MovieId).pipe(map(res => res as Movie));
   
  }

  deleteMovie(MovieId : number)
  {
    return this.http.delete(this.url + '/Movie/DeleteMovie?movieId='+ MovieId).
    pipe(map(res=>res as boolean));
  }
   
  getMovieShowTime(MovieId : number): Observable<MovieScreen[]>
  {
    return this.http.get(this.url+'/MovieScreen/GetShowTime?movieId='+MovieId).pipe(map(res => res as MovieScreen[]));
  }
}
