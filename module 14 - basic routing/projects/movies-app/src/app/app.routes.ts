import { Routes } from '@angular/router';

export const routes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'home', loadComponent: () => import('./pages/home/home')}, 
    {path: 'account', loadComponent: () => import('./pages/account/account'),
    },
    {path: 'movies', loadComponent: () => import('./pages/movies-list/movies-list'), 
        loadChildren:  () => import('./pages/movies-list/movies-list.routes')
            .then(m => m.moviesListRoutes) }
];
