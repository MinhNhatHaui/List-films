import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { MoviesComponent } from './movies/movies.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import {MovieService} from './movie.service';
import { MessageComponent } from './message/message.component';
import { MessageService } from './message.service';


@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    MovieDetailComponent,
    MessageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [MovieService, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
