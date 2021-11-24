import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { SerieDetailsComponent } from './serie-details/serie-details.component';
import { SerieList2021Component } from './serie-list2021/serie-list2021.component';
import { SerieList2022Component } from './serie-list2022/serie-list2022.component';
import { MovieList2021Component } from './movie-list2021/movie-list2021.component';
import { MovieList2022Component } from './movie-list2022/movie-list2022.component';
import { MultiTablaComponent } from './components/multi-tabla/multi-tabla.component';
import { SearchInputComponent } from './components/search-input/search-input.component';



@NgModule({
  declarations: [
    HomeComponent,
    MovieDetailsComponent,
    SerieDetailsComponent,
    SerieList2021Component,
    SerieList2022Component,
    MovieList2021Component,
    MovieList2022Component,
    MultiTablaComponent,
    SearchInputComponent
  ],
  exports:[
    HomeComponent,
    MovieDetailsComponent,
    SerieDetailsComponent,
    SerieList2021Component,
    SerieList2022Component,
    MovieList2021Component,
    MovieList2022Component
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ]
})
export class PagesModule { }
