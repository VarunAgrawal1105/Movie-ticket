import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Movie } from 'src/app/Model/movie';
import { MovieScreen } from 'src/app/Model/screen';
import { AuthServiceService } from 'src/app/Shared/auth-service.service';
import { MovieService } from 'src/app/Shared/movie.service';

@Component({
  selector: 'app-add-edit-movie',
  templateUrl: './add-edit-movie.component.html',
  styleUrls: ['./add-edit-movie.component.css']
})
export class AddEditMovieComponent implements OnInit {
  
   movie!:Movie;
   movies!:Movie[];
   screen!: MovieScreen[];
   photoFilePath:string = "/assets/img/uploadImage.png";
   photoFileName!:string;
   dateTime : any=[];
   static index = 0;
   //MovieShows =  [{ShowTime :"19/07/2021", Price:150}];
   //ShowTime = new FormControl('');
   //Price = new FormControl('');
   myForm : FormGroup;
  constructor(public MovieService : MovieService,private fb : FormBuilder,private route:ActivatedRoute,
              public AuthService:AuthServiceService) { 

    this.myForm = this.fb.group({
      MovieId : [0],
      MovieName : ['',{
       validators : 
         [Validators.required,Validators.minLength(3),Validators.maxLength(50)]
       
      }],
      Description : ['',{
        validators : [Validators.required,Validators.required,
          Validators.minLength(10),
          Validators.maxLength(200)]
      }],
      ImageUrl : ['',{
         validators : Validators.required
      }],
      MovieShows : this.fb.array([]),

    });
  }
  ngOnInit() {
    this.movie = new Movie();
    //this.movie.MovieShows.push(new MovieScreen(new Date(),150));
    this.route.paramMap.subscribe(params => {
      const MovieId = +params.get('MovieId');
      if(MovieId){
        this.getMovie(MovieId);
      }
    })
    
  }
  
  getMovie(MovieId : number)
  {
    this.MovieService.getMovie(MovieId).subscribe((data) => this.editMovie(data),
    (err : any) => console.log(err));
  }

  editMovie(data : Movie)
  {
    
     this.myForm.patchValue({
      MovieId : data.MovieId,
      MovieName : data.MovieName,
      Description : data.Description,
      ImageUrl : data.ImageUrl
    
     });

     this.myForm.setControl('MovieShows',this.setExistingShows(this.MovieShows));

  }

  setExistingShows(MovieShows : FormArray) : FormArray
  {
      /*const formArray = new FormArray([]);
      var iterator =  this.MovieShows.value();

      for(let value of iterator)
      {

      }
      shows.forEach(s => {
        formArray.push(this.fb.group({
          ShowTime : s.ShowTime,
          Price : s.Price
        }));
      });*/

      return this.MovieShows;
  }
  newShow(): FormGroup{
    return this.fb.group({
      ShowTime : new Date(),
      Price : '',
    })
  }
  uploadPhoto(event)
  {
    var file = event.target.files[0];
    
    const formData:FormData = new FormData();
    formData.append('uploadedFile',file,file.name);
    this.MovieService.uploadPhoto(formData).subscribe((data:any)=> {
        this.movie.ImageUrl = data.toString();
        this.photoFilePath = this.MovieService.photoUrl + "/" + this.movie.ImageUrl;
      
      
    });
    
  }

  addMovie(data : Movie)
  {
     this.MovieService.addMovie(data).
     subscribe((data) => {
      if(data){alert("Added Sucessfully")}
     })
              
  }

  /*addShow(ShowTime:Date,Price:number)
  {
    console.log(ShowTime,Price);
     this.movie.MovieShows.push(new MovieScreen(ShowTime,Price));
    
  }*/

  get MovieShows() : FormArray{
    return this.myForm.controls["MovieShows"] as FormArray;
  }
  addShow()
  {
     let count = 1;
      var arrayControl = this.myForm.get('MovieShows') as FormArray;
     if(this.MovieShows.length > 0)
     { 
      this.dateTime.push(arrayControl.at(AddEditMovieComponent.index).value["ShowTime"]);

      AddEditMovieComponent.index++;
      
         this.dateTime.sort();

         let j = 1;
      for(let i=0;i< this.dateTime.length && j< this.dateTime.length;i++)
      {
         //console.log(this.dateTime[i]);
         //console.log(this.dateTime[j]);
         if( this.dateTime[i] == this.dateTime[j])
         {
            count++;
            //console.log(count);
            if( count > 5)
            {
               alert("Cannot add more than 5 shows for a single day!!!");
               break;
            }

           
           
         }

         j++;
      }

    }
    if( count>5)
    {
      alert("Cannot add more than 5 shows for a single day!!!");
    }
    else
    {
      this.MovieShows.push(this.newShow());
    
    }
   
   
  }

  recordSubmit(data:Movie)
  {
    
     /*var iterator = this.shows.value;

     for(let value of iterator)
     {
       this.movie.MovieShows.push(value["ShowTime"],value["Price"]);
     }*/
    
    this.MovieService.addMovie(data).subscribe((data) =>
    {
      if(data)
      {
        alert("Added Sucessfuly");
      }

  });
 }

 onLogOut()
 {
   this.AuthService.logout();
 }
}
