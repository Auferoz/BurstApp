import { Component, OnInit } from '@angular/core';
import { MultisService } from '../../shared/services/multis.service';
import { Result } from '../../shared/interfaces/multi.interface';
import { ListMovies, ResultMovie } from '../../shared/interfaces/listmovies.interface';

@Component({
  selector: 'app-movie-list2021',
  templateUrl: './movie-list2021.component.html',
  styleUrls: ['./movie-list2021.component.scss']
})
export class MovieList2021Component implements OnInit {

  termino         : string = '';
  hayError        : boolean = false;
  listmovies21    : ResultMovie[] = [];

  constructor( private multisService: MultisService ) { }

  ngOnInit(): void {

    this.multisService.listMovies2021()
    .subscribe((values: ResultMovie[]) => {
      this.listmovies21 = values;
    }, (err) => {
      this.hayError     = true;
      this.listmovies21 = [];
    });
  }

}
