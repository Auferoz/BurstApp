import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MultiSearch } from '../interfaces/multi.interface';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  private apiUrl: string = 'https://api.themoviedb.org/3';
  
  // API COMPLETA https://api.themoviedb.org/3/search/multi?api_key=457643c75832b5d6f6c66e10f260618b&language=en-US&query=bull&page=1'

  constructor( private http: HttpClient ) { }

  BuscarMulti( termino: string ): Observable<MultiSearch[]> {
    
    const url = `${ this.apiUrl }/search/multi/?query=${ termino }&api_key=457643c75832b5d6f6c66e10f260618b`;

    return this.http.get<MultiSearch[]>( url );

  }

}
