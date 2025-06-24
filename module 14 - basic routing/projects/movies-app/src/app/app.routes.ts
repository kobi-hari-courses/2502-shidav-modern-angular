import { inject } from '@angular/core';
import { Routes } from '@angular/router';
import { AuthService } from './services/auth.service';

export const routes: Routes = [
//    {path: '', redirectTo: isAuth, pathMatch: 'full'},
    {path: '', redirectTo: isAuthenticated, pathMatch: 'full'},
    {path: 'home', loadComponent: () => import('./pages/home/home')}, 
    {path: 'account', loadComponent: () => import('./pages/account/account'),
    },
    {path: 'movies', loadComponent: () => import('./pages/movies-list/movies-list'), 
        loadChildren:  () => import('./pages/movies-list/movies-list.routes')
            .then(m => m.moviesListRoutes) }
];


function isAuth(): string {
    const authService = inject(AuthService);
    return authService.isLoggedIn() ? 'home' : 'account';
}

async function isAuthenticated(): Promise<string> {
    const authService = inject(AuthService);
    await new Promise(resolve => setTimeout(resolve, 3000)); // Simulate async operation
    return authService.isLoggedIn() ? 'home' : 'account';
}