import { Routes } from '@angular/router';
import { PageA } from './pages/page-a/page-a';
import { PageB } from './pages/page-b/page-b';
import { PageC } from './pages/page-c/page-c';
import { NotFound } from './pages/not-found/not-found';

export const routes: Routes = [
    { path: '', redirectTo: 'a', pathMatch: 'full'},
    { path: 'a', component: PageA}, 
    { path: 'b', component: PageB}, 
    { path: 'c', component: PageC},
    { path: '**', component: NotFound}
];
