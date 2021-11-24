import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from "rxjs/operators";
import { MultisService } from '../../shared/services/multis.service';
import { MultiDetails } from '../../shared/interfaces/details.interface';

@Component({
  selector: 'app-multi-details',
  templateUrl: './multi-details.component.html',
  styleUrls: ['./multi-details.component.scss']
})
export class MultiDetailsComponent implements OnInit {

  details!: MultiDetails;

  constructor( 
    private movieRoute: ActivatedRoute,
    private multisService: MultisService

    ) { }

  ngOnInit(): void {

    this.movieRoute.params
        .pipe(
          switchMap( ({ id, type }) => this.multisService.multiDetails( id, type )),
          tap( console.log )
        ) 
        .subscribe( details => this.details = details );


    // this.movieRoute.params
    //     .subscribe( ({ id }) => {
    //       console.log( id );

    //       this.MultisService.multiDetails( id )
    //           .subscribe( details => {
    //             console.log(details);
    //           })
    //     })
  }

}
