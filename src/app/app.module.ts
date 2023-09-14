import {  NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { MovieFinderComponent } from './components/movie-finder/movie-finder.component';
import { MovieSearchComponent } from './components/movie-search/movie-search.component';
import { MovieCardComponent } from './components/movie-card/movie-card.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MovieDetailsPageComponent } from './pages/movie-details-page/movie-details-page.component';
import { MovieDisplayComponent } from './components/movie-display/movie-display.component';
import { StoreModule } from '@ngrx/store';
import { myDataReducer } from './state/reducers/data.reducer';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    MovieFinderComponent,
    MovieSearchComponent,
    MovieCardComponent,
    HomePageComponent,
    MovieDetailsPageComponent,
    MovieDisplayComponent
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule, StoreModule.forRoot({ myData: myDataReducer })],
  providers: [],
  bootstrap: [AppComponent],
  
})
export class AppModule {}
