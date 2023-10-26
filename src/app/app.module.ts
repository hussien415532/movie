import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavComponent } from './Comps/nav/nav.component';
import { HomeComponent } from './Comps/home/home.component';
import { FormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { LoginComponent } from './Comps/login/login.component';
import { SignupComponent } from './Comps/signup/signup.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDividerModule } from '@angular/material/divider';
import { NotFoundComponent } from './Comps/not-found/not-found.component';
import { MovieDetailsComponent } from './Comps/movie-details/movie-details.component';
import { SeriesDetailsComponent } from './Comps/series-details/series-details.component';
import { SearchComponent } from './Comps/search/search.component';
import { CarouselComponent } from './Comps/carousel/carousel.component';
import { PeopleComponent } from './Comps/people/people.component';
import { PeopleDetailsComponent } from './Comps/people-details/people-details.component';
import { MovieComponent } from './Comps/movie/movie.component';
import { MatIconModule } from '@angular/material/icon';
import { SeriesComponent } from './Comps/series/series.component';
import { PaginatorComponent } from './Comps/paginator/paginator.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { TrailerComponent } from './Comps/trailer/trailer.component';
import { SimilarComponent } from './Comps/similar/similar.component';
import { CastComponent } from './Comps/cast/cast.component';
import { register } from 'swiper/element/bundle';
import { SwiperComponent } from './Comps/swiper/swiper.component';
import { MatSelectModule } from '@angular/material/select';
import { NgxPaginationModule } from 'ngx-pagination';
register();

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    NotFoundComponent,
    MovieDetailsComponent,
    SeriesDetailsComponent,
    SearchComponent,
    CarouselComponent,
    PeopleComponent,
    PeopleDetailsComponent,
    MovieComponent,
    SeriesComponent,
    PaginatorComponent,
    TrailerComponent,
    SimilarComponent,
    CastComponent,
    SwiperComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MatAutocompleteModule,
    MatDividerModule,
    MatInputModule,
    MatIconModule,
    MatFormFieldModule,
    MatDialogModule,
    MatButtonModule,
    MatSelectModule,
    NgxPaginationModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
