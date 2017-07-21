

import { Http,Response} from '@angular/http';
import { Injectable } from '@angular/core';
import { Headers,RequestOptions} from '@angular/http';



@Injectable()
export class FavouriteSearchService {
  url="http://localhost:3000/api/favourites/";
  constructor(private http: Http) {
  }

  getFavourite(){
      console.log("inside get Favoourite");
    //   const  url="http://localhost:3000/api/favourites/";
     return this.http.get(this.url).map((response: Response)=> response.json());
  }

 removeFav(movie)
 {
console.log("id : " ,movie.id);
const url = 'http://localhost:3000/api/favourites/'+ movie.id;      
const headers = new Headers({ 'Content-Type': 'application/json' });
const options = new RequestOptions({ headers: headers });
return this.http.delete(url, options)
          .map(res => res);

      
    //    return this.http.delete(this.url+id).map((response: Response)=>response.json);
 }
}