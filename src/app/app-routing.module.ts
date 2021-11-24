import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MovieList2021Component } from './pages/movie-list2021/movie-list2021.component';
import { SerieList2021Component } from './pages/serie-list2021/serie-list2021.component';
import { MovieList2022Component } from './pages/movie-list2022/movie-list2022.component';
import { SerieList2022Component } from './pages/serie-list2022/serie-list2022.component';
import { MultiDetailsComponent } from './pages/multi-details/multi-details.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path: 'movielist2021',
    component: MovieList2021Component
  },
  {
    path: 'movielist2022',
    component: MovieList2022Component
  },
  {
    path: 'serielist2021',
    component: SerieList2021Component
  },
  {
    path: 'serielist2022',
    component: SerieList2022Component
  },
  {
    path: 'details/:type/:id',
    component: MultiDetailsComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
