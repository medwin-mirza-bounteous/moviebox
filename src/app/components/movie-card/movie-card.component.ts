import { Component, Input} from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss']
})
export class MovieCardComponent {

  data: any;
  title:string="";
  actors:string="";
  imdb:string="";
  posterImage:string="";
  hasResponse:boolean=false;

  constructor(private dataService: DataService){
  }

  
  ngOnInit(): void {
    this.dataService.data$.subscribe((newData) => {
      this.data = newData;
      this.title = this.data.Title;
      this.actors = this.data.Actors;
      this.imdb = this.data.imdbRating;
      this.posterImage = this.data.Poster;
      if(this.data.Response=="False") {
        this.hasResponse=false;}
        else{
          this.hasResponse=true;
        }
      // This callback will be called whenever the data in the service changes.
    });
  }

 
  


}
