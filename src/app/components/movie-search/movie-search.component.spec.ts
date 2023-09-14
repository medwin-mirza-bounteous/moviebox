import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MovieSearchComponent } from './movie-search.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';


describe('MovieSearchComponent', () => {
  let component: MovieSearchComponent;
  let fixture: ComponentFixture<MovieSearchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MovieSearchComponent],
      imports:[HttpClientTestingModule],
      providers:[provideMockStore({})],
      schemas:[NO_ERRORS_SCHEMA]
    });
    fixture = TestBed.createComponent(MovieSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
