import { Injectable } from '@angular/core';
import {Movie} from './movie';
import {fakeMovies} from './fake-movie';

import {Observable} from 'rxjs/Observable';
import {of} from 'rxjs/observable/of';

import {MessageService} from './message.service';

@Injectable()
export class MovieService {
  getMovies(): Observable<Movie[]> {
    this.messageService.add(`${new Date().toLocaleString()}. Get movie list`);
    return of(fakeMovies);
  }
  constructor(public messageService: MessageService) { }

}
