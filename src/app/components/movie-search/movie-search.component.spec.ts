import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MovieSearchComponent } from './movie-search.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { DataService } from 'src/app/service/data.service';
import { Store } from '@ngrx/store';

describe('MovieSearchComponent', () => {
  let component: MovieSearchComponent;
  let fixture: ComponentFixture<MovieSearchComponent>;
  let dataService: DataService;
  let store: Store;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MovieSearchComponent],
      imports: [HttpClientTestingModule],
      providers: [provideMockStore({})],
      schemas: [NO_ERRORS_SCHEMA],
    });
    fixture = TestBed.createComponent(MovieSearchComponent);
    component = fixture.componentInstance;
    dataService = TestBed.inject(DataService);
    store = TestBed.inject(Store);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set the movieName in DataService and call updateData', () => {
    const movieName = 'TestMovie';

    spyOn(dataService, 'updateData');

    component.searchValue = movieName;

    component.sendMovieTitle();

    expect(dataService.movieName).toEqual(movieName);

    expect(dataService.updateData).toHaveBeenCalled();
  });
});
