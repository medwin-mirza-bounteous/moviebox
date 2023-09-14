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
      providers:[provideMockStore({})
      ]
    });
    fixture = TestBed.createComponent(MovieCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the movie card when `hasResponse` is true', () => {
    component.hasResponse = true;
    component.title = 'Sample Movie';
    component.actors = 'Actor 1, Actor 2';
    component.imdb = '7.5';
    component.posterImage = 'sample-poster.jpg';

    fixture.detectChanges();

    const movieCardElement = fixture.nativeElement;
    expect(movieCardElement.querySelector('.movie-card')).toBeTruthy();
    expect(movieCardElement.querySelector('.movie-card-title').textContent).toContain('Sample Movie');
    expect(movieCardElement.querySelector('.movie-card-description').textContent).toContain('Actor 1, Actor 2');
    expect(movieCardElement.querySelector('.movie-card-rating').textContent).toContain('7.5');
  });


  it('should display the "No movies found" card when `hasResponse` is false and `data.Response` is "False"', () => {
    component.hasResponse = false;
    component.data = { Response: 'False' };

    fixture.detectChanges();

    const errorCardElement = fixture.nativeElement;
    expect(errorCardElement.querySelector('.error-card')).toBeTruthy();
    expect(errorCardElement.querySelector('.error-card-info').textContent).toContain('No movies found');
  });

  it('should call `redirectToAnotherPage` when the movie card is clicked', () => {
    spyOn(component, 'redirectToAnotherPage');
    component.hasResponse = true;
    fixture.detectChanges();

    const movieCardElement = fixture.nativeElement.querySelector('.movie-card');
    movieCardElement.click();

    expect(component.redirectToAnotherPage).toHaveBeenCalled();
  });
});