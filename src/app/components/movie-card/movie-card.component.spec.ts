import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MovieCardComponent } from './movie-card.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { provideMockStore } from '@ngrx/store/testing';

describe('MovieCardComponent', () => {
  let component: MovieCardComponent;
  let fixture: ComponentFixture<MovieCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MovieCardComponent],
      imports: [HttpClientTestingModule],
      providers: [provideMockStore({})],
    });
    fixture = TestBed.createComponent(MovieCardComponent);
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
    expect(component.hasResponse).toBeTrue();
  });

  it('should initialize data and properties correctly when reponse is false', () => {
    const mockData = {
      Response: 'False'
    };

    spyOn(component['store'], 'select').and.returnValue({
      subscribe: (callback: Function) => callback(mockData),
    } as any);

    component.ngOnInit();

    expect(component.data).toEqual(mockData);
    expect(component.hasResponse).toBeFalse();
  });

  it('should navigate to another page', () => {
    const routerSpy = spyOn(component['router'], 'navigate');
    component.redirectToAnotherPage();
    expect(routerSpy).toHaveBeenCalledWith(['/movie']);
  });
});
