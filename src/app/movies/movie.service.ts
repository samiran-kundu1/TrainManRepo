import { Movie } from './Movie';
export class MovieService{

    movies:Movie[]=[
         {
            Name:"Iron Man",
            Year : "2008",
    },
    {
        Name:"Super Man",
        Year : "2011"
},
{
    Name:"Spider Man",
    Year : "2002"
},
{
    Name:"THOR",
    Year : "2010"
}
];
    
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
