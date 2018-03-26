import { Component, OnInit  } from '@angular/core';
import {Movie} from './movie';
import {fakeMovies} from './fake-movie';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit
{

  constructor() {}

  ngOnInit() {

}
  title = 'app';
}
