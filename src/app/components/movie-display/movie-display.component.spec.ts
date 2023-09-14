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
});
