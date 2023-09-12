import { Component } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  data: any;
  hasResponse: boolean = false;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.data$.subscribe((newData) => {
      this.data = newData;

      if (this.data.Response == 'False') {
        this.hasResponse = false;
      } else {
        this.hasResponse = true;
      }
    });
  }

  
}
