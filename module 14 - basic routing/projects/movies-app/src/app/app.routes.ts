import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { MoviesList } from './pages/movies-list/movies-list';
import { MovieDetails } from './pages/movie-details/movie-details';
import { MovieEdit } from './pages/movie-edit/movie-edit';
import { Account } from './pages/account/account';
import { authGuard } from './guards/auth-guard';

export const routes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'home', component: Home}, 
    {path: 'account', component: Account},
    {path: 'movies', component: MoviesList, children: [
        {path: '', redirectTo: '1', pathMatch: 'full'}, 
        {path: ':movieId', component: MovieDetails}, 
        {path: ':movieId/edit', component: MovieEdit, 
            canActivate: [authGuard]

        }
    ]}



];
