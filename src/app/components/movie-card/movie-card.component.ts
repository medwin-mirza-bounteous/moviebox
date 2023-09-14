import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { DataService } from 'src/app/data.service';
import { selectMyData } from 'src/app/state/selectors/data.selectors';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss'],
})
export class MovieCardComponent {
  data: any = { Response: 'hi' };
  title: string = '';
  actors: string = '';
  imdb: string = '';
  posterImage: string = '';
  hasResponse: boolean = false;

  constructor(
    private dataService: DataService,
    private router: Router,
    private store: Store,
  ) {}

  ngOnInit(): void {
    this.store.select(selectMyData).subscribe((newData) => {
      this.data = newData;
      this.title = this.data.Title;
      this.actors = this.data.Actors;
      this.imdb = this.data.imdbRating;
      this.posterImage = this.data.Poster;
      if (this.data?.Response == 'True') {
        this.hasResponse = true;
      } else {
        this.hasResponse = false;
      }
      // This callback will be called whenever the data in the service changes.
    });
  }

  redirectToAnotherPage() {
    this.router.navigate(['/movie']);
  }
}
