import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { MoviesList } from './pages/movies-list/movies-list';
import { MovieDetails } from './pages/movie-details/movie-details';

export const routes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'home', component: Home}, 
    {path: 'movies', component: MoviesList, children: [
        {path: '', redirectTo: '1', pathMatch: 'full'}, 
        {path: ':movieId', component: MovieDetails}
    ]}



];
