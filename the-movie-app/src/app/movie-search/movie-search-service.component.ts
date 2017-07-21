/**
 * Created by user on 29/5/17.
 */
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {Headers} from '@angular/http';

@Injectable()
export class MovieSearchService {
  num= 1;
  constructor(private http: Http) { }
  getMovie(movieName) {
    // this.num = this.num + 1 ;
    this.num=1;
    const url = 'https://api.themoviedb.org/3/search/movie?api_key=4f710990a104778fce0a10e1e1596f2b&language=en-US&query= ' + movieName + '&page=' + ( this.num ) + '&include_adult=false' ;
    return this.http.get(url).map((response: Response) => response.json());
  }
    getNewData(movieName) {
      const url = 'https://api.themoviedb.org/3/search/movie?api_key=4f710990a104778fce0a10e1e1596f2b&language=en-US&query= ' + movieName + '&page=' + ( this.num) + '&include_adult=false' ;

      console.log(" inside getNew Data ");

     console.log(movieName);
     console.log(url);
     return this.http.get(url).map((response: Response) => response.json());
    }
 
  addFav(movie)
  {
      
       const headers = new Headers();
       const url='http://localhost:3000/api/favourites/';
       headers.append('Content-Type', 'application/json');


     return  this.http.post(url,movie,{headers:headers}).map(data=>{

        console.log("ok");
        
    },error=>{
        console.log(JSON.stringify(error.json()));
        
    });

      
  }

  editFav(movie)
  {
      const id=movie.id;
      console.log(id);
      const url='http://localhost:3000/api/favourites/'+id;
      console.log(url);

  }

}
