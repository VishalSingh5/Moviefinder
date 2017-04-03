import {ModuleWithProviders} from '@angular/core' ;
import {Routes, RouterModule} from '@angular/router';

import {MovieComponent} from './components/movie/movie.component';
import {MoviesComponent} from './components/movies/movies.component';

 const appRoutes: Routes =[
 {
      path:'',
      component: MovieComponent
 },
 {
    path:'movies/:id',
    component: MoviesComponent
 }
 ];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
