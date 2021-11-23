import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../shared/services/multis.service';
import { MultiSearch, Result } from '../../shared/interfaces/multi.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

  termino   : string = '';
  hayError  : boolean = false;
  multis    : Result[] = [];

  constructor( private moviesService: MoviesService ) { }

  ngOnInit(): void {
  }

  buscar(){
    
    this.hayError = false;
    console.log(this.termino);

    this.moviesService.BuscarMulti( this.termino )
    .subscribe((values: Result[]) => {
      this.multis = values;
      console.log(values);
    }, (err) => {
      this.hayError   = true;
      this.multis     = [];
    });
  }

}
