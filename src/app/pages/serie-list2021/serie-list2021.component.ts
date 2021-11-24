import { Component, OnInit } from '@angular/core';
import { MultisService } from '../../shared/services/multis.service';
import { ResultSerie } from '../../shared/interfaces/listseries.interface';

@Component({
  selector: 'app-serie-list2021',
  templateUrl: './serie-list2021.component.html',
  styleUrls: ['./serie-list2021.component.scss']
})
export class SerieList2021Component implements OnInit {

  termino         : string = '';
  hayError        : boolean = false;
  listseries21    : ResultSerie[] = [];

  constructor( private multisService: MultisService ) { }

  ngOnInit(): void {

    this.multisService.listSeries2021()
    .subscribe((values: ResultSerie[]) => {
      this.listseries21 = values;
    }, (err) => {
      this.hayError     = true;
      this.listseries21 = [];
    });
  }

}
