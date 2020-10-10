export class Movie
{
    name:string;
    img: any = "";
    year:string;
    
    public get Name() : string {
        return this.name;
    }

    
    public set Name(v : string) {
        this.name = v;
    }

    
    public get Img() : any {
        return this.img;
    }
    
    
    public set Img(v : any) {
        this.img = v;
    }
    
    public get Year() : string {
        return this.year;
    }
    
    
    public set Year(v : string) {
        this.year = v;
    }
    
    
}