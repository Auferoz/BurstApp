import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../shared/services/movies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

  termino   : string = '';
  hayError  : boolean = false;

  constructor( private moviesService: MoviesService ) { }

  ngOnInit(): void {
  }

  buscar(){
    
    this.hayError = false;
    console.log(this.termino);

    this.moviesService.BuscarMulti( this.termino )
        .subscribe( multi => {
          console.log(multi);

        }, (err) => {
          this.hayError = true;
        });
  }

}
