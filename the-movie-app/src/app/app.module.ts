import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import { MovieSearchComponent } from './movie-search/movie-search.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FavouriteComponent } from './favourite/favourite.component';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
@NgModule({
  declarations: [
    AppComponent,
    MovieSearchComponent,
    DashboardComponent,
    FavouriteComponent
  ],
  imports: [


      BrowserModule, 
      FormsModule,
      HttpModule,
      InfiniteScrollModule,
    RouterModule.forRoot([
      {
        path: '',
        redirectTo: 'search',
        pathMatch: 'full'

      },
      {
        path: 'search',
        component: MovieSearchComponent

      },
      {
        path: 'favourite',
        component: FavouriteComponent
      }
    ]), 
  ],
  providers: [],
  bootstrap: [DashboardComponent]
})
export class AppModule { }

// import { BrowserModule } from '@angular/platform-browser';
// import { NgModule } from '@angular/core';
// import { FormsModule } from '@angular/forms';
// import { HttpModule } from '@angular/http';

// import { AppComponent } from './app.component';
// import { DashboardComponent } from './dashboard/dashboard.component';
// import { MovieSearchComponent } from './movie-search/movie-search.component';
// import { FavouriteComponent } from './favourite/favourite.component';

// @NgModule({
//   declarations: [
//     AppComponent,
//     DashboardComponent,
//     MovieSearchComponent,
//     FavouriteComponent
//   ],
//   imports: [
//     BrowserModule,
//     FormsModule,
//     HttpModule
//   ],
//   providers: [],
//   bootstrap: [AppComponent]
// })
// export class AppModule { }
