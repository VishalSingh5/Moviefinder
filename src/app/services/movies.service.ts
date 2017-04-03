import { Injectable } from '@angular/core';
import {Jsonp} from '@angular/http';
import 'rxjs/Rx' ;


@Injectable()
export class MoviesService {
        apikey: string;
  constructor(private _jsonp: Jsonp) {
     this.apikey ='8cd4c5a8a25e2c3e006b4d6b2d44b5c1' ;
      console.log('MovieServices Intialized...');
   }

   getPopular(){
     return this._jsonp.get('https://api.themoviedb.org/3/discover/movie?callback=JSONP_CALLBACK&sort_by=popularity.desc&api_key='+this.apikey)
      .map(res => res.json());
   }
   getInTheaters(){
      return this._jsonp.get('https://api.themoviedb.org/3/discover/movie?callback=JSONP_CALLBACK&primary_release_date.gte=2017-04-03&primary_release_date.lte=2017-04-04&api_key='+this.apikey)
      .map(res => res.json());
   }
   searchMovies(searchstr:string){
   return this._jsonp.get('https://api.themoviedb.org/3/search/movie?callback=JSONP_CALLBACK&query='+searchstr+'&sort_bypopularity.desc&api_key='+this.apikey)
   .map(res => res.json());
   }
   getMovie(id:string){
   return this._jsonp.get('https://api.themoviedb.org/3/movie/'+id+'?callback=JSONP_CALLBACK&api_key='+this.apikey)
    .map(res => res.json());
 }
   }
