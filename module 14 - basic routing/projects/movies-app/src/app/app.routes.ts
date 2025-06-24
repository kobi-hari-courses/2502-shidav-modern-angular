import { inject } from '@angular/core';
import { ResolveFn, Routes } from '@angular/router';
import { AuthService } from './services/auth.service';
import { NUMERIC_VALUE_TOKEN } from './token/numeric-value.token';

const getMoviesCount: ResolveFn<number> = async (route, state) => {
  await new Promise((resolve) => setTimeout(resolve, 3000)); // Simulate async operation
  if (state.url === '/home') {
    return 10;
  }
  return 20;
};

export const routes: Routes = [
  //    {path: '', redirectTo: isAuth, pathMatch: 'full'},
  { path: '', redirectTo: isAuthenticated, pathMatch: 'full' },
  {
    path: 'home',
    providers: [{ provide: NUMERIC_VALUE_TOKEN, useValue: 1000 }],
    loadComponent: () => import('./pages/home/home'),
    resolve: {
      moviesCount: getMoviesCount,
    },
  },
  {
    path: 'home-2',
    providers: [{ provide: NUMERIC_VALUE_TOKEN, useValue: 2000 }],

    loadComponent: () => import('./pages/home/home'),
    resolve: {
      moviesCount: getMoviesCount,
    },
  },
  { path: 'account', loadComponent: () => import('./pages/account/account') },
  {
    path: 'movies',
    loadComponent: () => import('./pages/movies-list/movies-list'),
    loadChildren: () =>
      import('./pages/movies-list/movies-list.routes').then(
        (m) => m.moviesListRoutes
      ),
  },
];

function isAuth(): string {
  const authService = inject(AuthService);
  return authService.isLoggedIn() ? 'home' : 'account';
}

async function isAuthenticated(): Promise<string> {
  const authService = inject(AuthService);
  await new Promise((resolve) => setTimeout(resolve, 3000)); // Simulate async operation
  return authService.isLoggedIn() ? 'home' : 'account';
}
