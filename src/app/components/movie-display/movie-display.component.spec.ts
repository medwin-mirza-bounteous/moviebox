import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { MovieDisplayComponent } from './movie-display.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('MovieDisplayComponent', () => {
  let component: MovieDisplayComponent;
  let fixture: ComponentFixture<MovieDisplayComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MovieDisplayComponent],
      imports:[HttpClientTestingModule],
      providers:[provideMockStore({})]
      
    });
    fixture = TestBed.createComponent(MovieDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize data and properties correctly when response is true', () => {
    // Simulate a response from the store.
    const mockData = {
      Response: 'True',
      Title: 'Movie Title',
      Actors: 'Actor 1, Actor 2',
      imdbRating: '8.0',
      Poster: 'poster.jpg',
      Released:'2009',
      Plot: 'Thriller',
      Director:'James Cameron',
      BoxOffice: '5 million $USD',
      Language: 'English',
      imdbVotes: '10000',
      Genre: 'mystery',
      Runtime: '200 minutes'
  
    };

    spyOn(component['store'], 'select').and.returnValue({
      subscribe: (callback: Function) => callback(mockData),
    } as any);

    component.ngOnInit();

    expect(component.data).toEqual(mockData);
    expect(component.title).toEqual(mockData.Title);
    expect(component.actors).toEqual(mockData.Actors);
    expect(component.imdb).toEqual(mockData.imdbRating);
    expect(component.posterImage).toEqual(mockData.Poster);
    expect(component.runTime).toEqual(mockData.Runtime);
    expect(component.released).toEqual(mockData.Released);
    expect(component.plot).toEqual(mockData.Plot);
    expect(component.direction).toEqual(mockData.Director);
    expect(component.boxOffice).toEqual(mockData.BoxOffice);
    expect(component.language).toEqual(mockData.Language);
    expect(component.imdbVotes).toEqual(mockData.imdbVotes);
    expect(component.genre).toEqual(mockData.Genre);
    
  });
});
