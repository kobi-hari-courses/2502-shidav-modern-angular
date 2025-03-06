import {
  patchState,
  signalStore,
  withComputed,
  withHooks,
  withMethods,
  withState,
} from '@ngrx/signals';
import { initialAppSlice } from './app.slice';
import { incX, incY, reset } from './app.updaters';
import { computed } from '@angular/core';

export const AppStore = signalStore(
    {providedIn: 'root'},
  withState(initialAppSlice),
  withComputed((store) => ({
    sum: computed(() => store.x() + store.y()),
    diff: computed(() => store.x() - store.y()),
  })),
  withMethods((store) => ({
    incX: () => patchState(store, incX()),
    incY: () => patchState(store, incY()),
    incBoth: () => patchState(store, incX(), incY()),
    reset: (x: number, y: number) => patchState(store, reset(x, y)),
  })),
  withHooks((store) => {
    let interval: any = null;

    return {
      onInit: () => {
        interval = setInterval(() => {store.incBoth()}, 5000);
      },
      onDestroy: () => {
        clearInterval(interval);
      },
    };
  })
);
