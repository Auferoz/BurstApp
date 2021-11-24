import { Component, Input, OnInit } from '@angular/core';
import { Result } from '../../../shared/interfaces/multi.interface';
import { ListMovies } from '../../../shared/interfaces/listmovies.interface';

@Component({
  selector: 'app-multi-tabla',
  templateUrl: './multi-tabla.component.html',
  styleUrls: ['./multi-tabla.component.scss']
})
export class MultiTablaComponent implements OnInit {

  @Input() multis    : Result[] = [];
  @Input() listMovies: ListMovies[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
