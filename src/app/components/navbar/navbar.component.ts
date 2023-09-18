import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { DataService } from 'src/app/service/data.service';
import { selectMyData } from 'src/app/state/selectors/data.selectors';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  data: any;
  hasResponse: boolean = false;

  constructor(private dataService: DataService,private store: Store) {}

  ngOnInit(): void {
    this.store.select(selectMyData).subscribe((newData) => {
      this.data = newData;

      if (this.data.Response == 'False') {
        this.hasResponse = false;
      } else {
        this.hasResponse = true;
      }
    });
  }

  
}
