import { MovieScreen } from "./screen";

export class Movie
{
   MovieId!: number; 
   ImageUrl!:string;
   MovieName!:string; 
   Description!:string; 
   MovieShows!:Array<MovieScreen>;

}