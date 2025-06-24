import { Routes } from '@angular/router';
import { authGuard } from '../../guards/auth-guard';

export const moviesListRoutes: Routes = [
  { path: '', redirectTo: '1', pathMatch: 'full' },
  {
    path: ':movieId',
    loadComponent: () => import('../movie-details/movie-details'),
  },
  {
    path: ':movieId/edit',
    loadComponent: () => import('../movie-edit/movie-edit'),
    canActivate: [authGuard],
  },
];
