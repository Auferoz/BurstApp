import { Component, OnInit } from '@angular/core';
import { MultisService } from '../../shared/services/multis.service';
import { MultiSearch, Result } from '../../shared/interfaces/multi.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

  termino   : string = '';
  hayError  : boolean = false;
  multise    : Result[] = [];

  constructor( private multisService: MultisService ) { }

  ngOnInit(): void {
  }

  buscar( termino: string ){
    
    this.hayError = false;
    this.termino = termino;

    this.multisService.BuscarMulti( termino )
    .subscribe((values: Result[]) => {
      this.multise = values;
      console.log(values);
    }, (err) => {
      this.hayError   = true;
      this.multise     = [];
    });
  }

  sugerencias( termino: string ){
    this.hayError = false;
  }

}
