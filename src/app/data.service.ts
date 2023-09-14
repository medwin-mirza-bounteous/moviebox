import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Store } from '@ngrx/store';
import { addData } from './state/actions/data.actions';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  movieName: string = '';
  apiUrl: string = '';

  constructor(
    private http: HttpClient,
    private store: Store,
  ) {}

  updateData(): void {
    this.apiUrl =
      'https://www.omdbapi.com/?t=' + this.movieName + '&apikey=6f3f26e7&';
    this.http.get(this.apiUrl).subscribe((data) => {
      const dataToStore = data;
      this.store.dispatch(addData({ data: dataToStore }));
    }); // Update the data and notify subscribers
  }
}
