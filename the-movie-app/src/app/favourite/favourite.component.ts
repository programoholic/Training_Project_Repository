import { Component, OnInit } from '@angular/core';
import { FavouriteSearchService } from './favourite-service.component';
import { MovieSearchComponent} from '../movie-search/movie-search.component';
@Component({
  selector: 'app-favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.css'],
  providers: [FavouriteSearchService]
})
export class FavouriteComponent implements OnInit {
 favourites = [];
  constructor(private favouriteService: FavouriteSearchService) { }

   removeFavourite(movie)
   {
           console.log(" inside Removed : ");
           console.log(" geot movie  : ",movie);
           console.log(movie.id);
            this.favouriteService.removeFav(movie).subscribe(result =>{

              console.log("Removed : ");
              this.getFav();
            });       
   }

  ngOnInit() {
     
        this.getFav();
  }
     getFav()
     {
        this.favouriteService.getFavourite().subscribe(movies =>{
        console.log("data : " , movies);
        this.favourites=movies;
      });
     }
}
