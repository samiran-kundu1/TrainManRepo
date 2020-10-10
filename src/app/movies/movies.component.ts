import { MovieService } from './movie.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent {

  movies; 
  constructor(service: MovieService) { 
  this.movies = service.getListOfMovies();
  }
  
}
