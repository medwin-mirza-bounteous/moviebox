import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarComponent } from './navbar.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { DataService } from 'src/app/service/data.service';
import { Store } from '@ngrx/store';

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;
  let dataService: DataService;
  let store: Store;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavbarComponent],
      imports: [HttpClientTestingModule],
      providers: [provideMockStore({})],
    });
    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    dataService = TestBed.inject(DataService);
    store = TestBed.inject(Store);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set hasResponse to true when data.Response is not "False"', () => {
    const newData = { Response: 'True' };

    spyOn(store, 'select').and.returnValue({
      subscribe: (callback: Function) => callback(newData),
    } as any);

    component.ngOnInit();

    expect(component.hasResponse).toBeTrue();
  });

  it('should set hasResponse to false when data.Response is "False"', () => {
    const newData = { Response: 'False' };

    spyOn(store, 'select').and.returnValue({
      subscribe: (callback: Function) => callback(newData),
    } as any);

    component.ngOnInit();

    expect(component.hasResponse).toBeFalse();
  });
});
