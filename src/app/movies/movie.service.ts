import { Movie } from './Movie';
export class MovieService{

    movies:Array<Movie> = 
    [
        new Movie("Iron Man","image\img1.jpg","2008"),
        new Movie("Thor","image\img1.jpg","2010"),
        new Movie("Captain America","image\img1.jpg","2008"),
    ]
    
    //["movie1","movie2","movie3"];
    searchedMovies :string[];
    getListOfMovies()
    {
        return this.movies;
    }
    getmovies(res:string)
    {
        return this.movies.filter(element=>element.Name.toLowerCase().includes(res.toLowerCase()) || element.Year.toLowerCase().includes(res.toLowerCase()));
    }
  }
