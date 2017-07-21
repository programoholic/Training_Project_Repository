import { Component, OnInit } from '@angular/core';
import { MovieSearchService } from './movie-search-service.component';
import { GenreSearchService} from './genre-service.component';
import {MdSnackBar} from '@angular/material';

@Component({
  selector: 'app-movie-search',
  templateUrl: './movie-search.component.html',
  styleUrls: ['./movie-search.component.css'],
  providers: [MovieSearchService,GenreSearchService]
})
export class MovieSearchComponent implements OnInit {
  title = 'MovieApp';
  searchText: string;
  movieNameResult = [];
  totalPages: number;
  buttonIsDsbaled=true;
  genre = [];
  searched=false;
  constructor(private moviesearchservice: MovieSearchService, private genreService: GenreSearchService, private snackBar: MdSnackBar ) {
    
   }

  ontype(event: string): void {

    this.buttonIsDsbaled = true;
    const passedString = event;

    if ( /\S/.test( passedString )) {

      this.buttonIsDsbaled = false;
    }

  }
  
  OnSearch() {
    this.moviesearchservice.getMovie(this.searchText)
      .subscribe(movie => {
        this.movieNameResult = movie.results;
        this.totalPages = movie.total_pages;
        this.searched=true;
      });

    this.genreService.getGenre().subscribe(movieGenre => {
      this.genre = movieGenre.genres;
      console.log(" inside genere service ");


      //    movieGenre.forEach((data) => {
      //
      //      this.genre.push(data);
      // });
      // this.genre = movieGenre;
      // console.log(this.genre);
    });
    // console.log(this.movieNameResult);
    // console.log(this.totalPages);

  }
scrolld() {
    const page = this.moviesearchservice.num++;
    if (page <= this.totalPages) {

      this.moviesearchservice.getNewData(this.searchText).subscribe(datas => {

        console.log(datas.results);

        (datas.results).forEach((data) => {

          this.movieNameResult.push(data);
          // console.log(data.genre_ids);
          // this.displayGen(data.genre_ids);
        });

      });
    }
  }

  getGenreNames(elements) {

    const obj = [];

    elements.forEach((data) => {

      this.genre.forEach((dt) => {
        if (data === dt.id)
          obj.push(dt.name);
      });
    });


     // console.log("genre classed");
     // console.log( elements);



     // elements.forEach()

    // elements.forEach((data) => {
    //
    //     this.genre.find((item) => {
    //
    //        return item.id === data;
    //
    //    //
   

    return obj;
  }

AddFavourite(obj):any{

    console.log(obj);
   this.moviesearchservice.addFav(obj).subscribe(data=>{
       alert(data);
   });
//    .subscribe(data=>{
     
//       alert(data);

// }

}


 displayMesg(mesg){
   
     
 } 

  ngOnInit() {
  }

}
