export class Movie
{

    
    constructor(private name:string,private imgUrl:string,private year:string)
    {

    }

    public get Name() : string {
        return this.name;
    }

    
    public set Name(v : string) {
        this.name = v;
    }

    
    public get Img() : string {
        return this.imgUrl;
    }
    
    
    public set Img(v : string) {
        this.imgUrl = v;
    }
    
    public get Year() : string {
        return this.year;
    }
    
    
    public set Year(v : string) {
        this.year = v;
    }
    
    
}