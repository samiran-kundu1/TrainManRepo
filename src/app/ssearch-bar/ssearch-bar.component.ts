import { MovieService } from './../movies/movie.service';
import { Component, OnInit } from '@angular/core';
import { stringify } from 'querystring';

@Component({
  selector: 'app-ssearch-bar',
  templateUrl: './ssearch-bar.component.html',
  styleUrls: ['./ssearch-bar.component.css']
})
export class SsearchBarComponent implements OnInit {

  movies;
  service;
  searchedMovies : string[];
  constructor(service:MovieService) {
    this.service = service;
    this.movies = service.getListOfMovies();
   }

  ngOnInit(): void {
    
  }

  search(value:string)
  {
    console.log("value:",value);
    if(value)
    { 
      console.log("In",value);
      let res= value;
      this.searchedMovies = this.service.getmovies(res);
      return this.searchedMovies;
    }
    else
    {
      this.searchedMovies = null;
      return this.searchedMovies;
    }
}

  

}
