import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { DataService } from 'src/app/service/data.service';
import { addData } from 'src/app/state/actions/data.actions';

@Component({
  selector: 'app-movie-search',
  templateUrl: './movie-search.component.html',
  styleUrls: ['./movie-search.component.scss']
})
export class MovieSearchComponent {
  
  searchValue: string = '';

  constructor(private dataService:DataService,private store:Store){
  }
  sendMovieTitle(){
    this.dataService.movieName=this.searchValue;
    this.dataService.updateData();
    
  }



}
