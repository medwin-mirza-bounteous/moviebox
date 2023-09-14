import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieFinderComponent } from './movie-finder.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('MovieFinderComponent', () => {
  let component: MovieFinderComponent;
  let fixture: ComponentFixture<MovieFinderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MovieFinderComponent],
      schemas :[CUSTOM_ELEMENTS_SCHEMA],
    });
    fixture = TestBed.createComponent(MovieFinderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
