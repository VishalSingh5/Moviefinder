import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute} from '@angular/router';
import {MoviesService} from '../../services/movies.service';

@Component({
  selector: 'movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
    movies: Object;
  constructor(
      private router: ActivatedRoute,
      private _moviesServices:MoviesService) {
       }

  ngOnInit() {
    this.router.params.subscribe((params)=>{
     let id = params['id'];
     this._moviesServices.getMovie(id).subscribe(movies =>{
       this.movies=movies;
       console.log(movies);
     });
    });
  }

}
