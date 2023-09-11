import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  movieName: string = '';

  data: any;
  apiUrl: string = '';

  private dataSubject = new BehaviorSubject<any>(null);
  data$ = this.dataSubject.asObservable();

  constructor(private http: HttpClient) {}

  updateData(): void {
    this.apiUrl =
      'https://www.omdbapi.com/?t=' + this.movieName + '&apikey=6f3f26e7&';
    this.http.get(this.apiUrl).subscribe((data) => {
      this.data = data;
      console.log(data);
      // console.log(this.movieName);
      // console.log(this.apiUrl);
      this.dataSubject.next(data);
    }); // Update the data and notify subscribers
  }
}
