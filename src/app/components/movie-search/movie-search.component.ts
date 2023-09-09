import { Component } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-movie-search',
  templateUrl: './movie-search.component.html',
  styleUrls: ['./movie-search.component.scss']
})
export class MovieSearchComponent {
  
  searchValue: string = '';

  constructor(private dataService:DataService){
  }
  sendMovieTitle(){
    this.dataService.movieName=this.searchValue;
    this.dataService.updateData();
    
  }

}
