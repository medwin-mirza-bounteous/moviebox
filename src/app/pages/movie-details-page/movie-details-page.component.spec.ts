import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieDetailsPageComponent } from './movie-details-page.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('MovieDetailsPageComponent', () => {
  let component: MovieDetailsPageComponent;
  let fixture: ComponentFixture<MovieDetailsPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MovieDetailsPageComponent],
      schemas :[CUSTOM_ELEMENTS_SCHEMA],
    });
    fixture = TestBed.createComponent(MovieDetailsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
