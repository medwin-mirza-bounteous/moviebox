import { Component } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-movie-display',
  templateUrl: './movie-display.component.html',
  styleUrls: ['./movie-display.component.scss'],
})
export class MovieDisplayComponent {
  data: any;
  hasResponse: boolean = false;
  title: string = '';
  actors: string = '';
  imdb: string = '';
  posterImage: string = '';
  released: string = '';
  plot: string = '';
  direction: string = '';
  boxOffice: string = '';
  language: string = '';
  imdbVotes: string = '';
  genre: string = '';
  runTime: string = '';

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.data$.subscribe((newData) => {
      this.data = newData;
      this.posterImage = this.data.Poster;
      this.title = this.data.Title;
      this.runTime = this.data.Runtime;
      this.genre = this.data.Genre;
      this.language = this.data.Language;
      this.released = this.data.Released;
      this.imdb = this.data.imdbRating;
      this.imdbVotes = this.data.imdbVotes;
      this.plot = this.data.Plot;
      this.direction = this.data.Director;
      this.actors = this.data.Actors;
      this.boxOffice = this.data.BoxOffice;

      // This callback will be called whenever the data in the service changes.
    });
  }
}
