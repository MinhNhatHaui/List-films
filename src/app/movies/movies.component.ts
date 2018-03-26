import { Component, OnInit } from '@angular/core';
import {Movie} from '../movie';
import {fakeMovies} from '../fake-movie';
import {MovieService} from '../movie.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  movie: Movie = {
    id: 1,
    name: 'Star Wars',
    releaseYear: 1997
  };
  // movies = fakeMovies;
  movies: Movie[];
  selectedMovie: Movie;
  onSelect(movie: Movie): void {
    this.selectedMovie = movie;
  }
  constructor(private movieService: MovieService) { }
  getMoviesFromService(): void {
    // this.movies = this.movieService.getMovies();
    this.movieService.getMovies().subscribe(updateMovies => this.movies = updateMovies);
  }

  ngOnInit() {
    this.getMoviesFromService();
  }

}
