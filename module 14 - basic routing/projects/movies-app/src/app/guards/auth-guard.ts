import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { inject } from '@angular/core';
import { toObservable } from '@angular/core/rxjs-interop';
import { filter, take } from 'rxjs';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);
  const isLoggedIn = authService.isLoggedIn();

  if (isLoggedIn) return true;

  const target = state.url;
  const urlTree = router.createUrlTree(['/account']);

  const isLoggedIn$ = toObservable(authService.isLoggedIn).pipe(
    filter(v => v === true), 
    take(1)
  );

  isLoggedIn$.subscribe(() => {
    // Redirect to the target URL after login
    router.navigateByUrl(target);
  });

  return urlTree;
};
