import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieFinderComponent } from './movie-finder.component';

describe('MovieFinderComponent', () => {
  let component: MovieFinderComponent;
  let fixture: ComponentFixture<MovieFinderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MovieFinderComponent]
    });
    fixture = TestBed.createComponent(MovieFinderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
