import { Component, OnInit } from '@angular/core';
import { MoviesService} from '../../services/movies.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

popularList:Array<Object>;
theaterList:Array<Object>;
searchstr: string;
searchres: Array<Object>;
constructor(private _movieService: MoviesService) {
            this._movieService.getPopular().subscribe(res =>{
               this.popularList=res.results;

            });
            this._movieService.getInTheaters().subscribe(res =>{
              this.theaterList=res.results;

            });
        }
        searchMovies(){
             this._movieService.searchMovies(this.searchstr).subscribe(res =>{
                this.searchres=res.results;

          });
          }
  ngOnInit() {
  }

}
