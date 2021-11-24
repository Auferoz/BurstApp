import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Result, MultiSearch } from '../interfaces/multi.interface';
import { ResultMovie, ListMovies } from '../interfaces/listmovies.interface';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  private apiUrl: string = 'https://api.themoviedb.org';
  
  // API COMPLETA https://api.themoviedb.org/3/search/multi?api_key=457643c75832b5d6f6c66e10f260618b&language=en-US&query=bull&page=1'
  // API LIST https://api.themoviedb.org/4/list/{list_id}?page=1&api_key=457643c75832b5d6f6c66e10f260618b

  constructor( private http: HttpClient ) { }

  BuscarMulti( termino: string ): Observable<Result[]> {
    const url = `${ this.apiUrl }/3/search/multi/?query=${ termino }&api_key=457643c75832b5d6f6c66e10f260618b`;
    return this.http.get<MultiSearch>( url )
          .pipe(
            map((resp: MultiSearch)=>{
              return resp.results
            })
          );
  }

  ListMovies2021( list = '7114017' ): Observable<ResultMovie[]> {
    const url = `${ this.apiUrl }/4/list/${list}/?api_key=457643c75832b5d6f6c66e10f260618b&page=1`;
    console.log(url);
    return this.http.get<ListMovies>( url )
    .pipe(
      map((resp: ListMovies)=>{
        return resp.results
      })
    );
  }

}
