import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../shared/services/multis.service';
import { Result } from '../../shared/interfaces/multi.interface';
import { ListMovies } from '../../shared/interfaces/listmovies.interface';

@Component({
  selector: 'app-movie-list2021',
  templateUrl: './movie-list2021.component.html',
  styleUrls: ['./movie-list2021.component.scss']
})
export class MovieList2021Component implements OnInit {

  termino   : string = '';
  hayError  : boolean = false;
  multis    : ListMovies[] = [];
  moviesService: any;

  constructor( private MoviesService: MoviesService ) { }

  ngOnInit(): void {
  }

  buscar( termino: string ){
    
    this.hayError = false;
    this.termino = termino;

    this.moviesService.listMovies2021( termino )
    .subscribe((values: ListMovies[]) => {
      this.multis = values;
      console.log(values);
    });
  }

}
