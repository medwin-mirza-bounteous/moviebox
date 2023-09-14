import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieCardComponent } from './movie-card.component';
import { GlobalAppModuleImports, GlobalAppModuleProviders } from 'src/app/global-providers.mock';




describe('MovieCardComponent', () => {
  let component: MovieCardComponent;
  let fixture: ComponentFixture<MovieCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MovieCardComponent],
      imports: GlobalAppModuleImports,
      providers:GlobalAppModuleProviders
    });
    fixture = TestBed.createComponent(MovieCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
