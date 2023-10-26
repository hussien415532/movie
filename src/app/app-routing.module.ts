import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Comps/home/home.component';
import { NotFoundComponent } from './Comps/not-found/not-found.component';
import { MovieDetailsComponent } from './Comps/movie-details/movie-details.component';
import { SeriesDetailsComponent } from './Comps/series-details/series-details.component';
import { PeopleComponent } from './Comps/people/people.component';
import { MovieComponent } from './Comps/movie/movie.component';
import { PeopleDetailsComponent } from './Comps/people-details/people-details.component';
import { SeriesComponent } from './Comps/series/series.component';
import { PaginatorComponent } from './Comps/paginator/paginator.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'movies', component: MovieComponent,  },
  { path: 'movie/:id', component: MovieDetailsComponent },
  { path: 'series', component: SeriesComponent },
  { path: 'series/:id', component: SeriesDetailsComponent },
  { path: 'people', component: PeopleComponent },
  { path: 'people/:id', component: PeopleDetailsComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
