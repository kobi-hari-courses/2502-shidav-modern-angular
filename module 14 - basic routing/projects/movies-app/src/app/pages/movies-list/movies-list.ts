import { Component, inject } from '@angular/core';
import { DataService } from '../../services/data.service';
import { toSignal } from '@angular/core/rxjs-interop';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-movies-list',
  imports: [RouterModule],
  templateUrl: './movies-list.html',
  styleUrl: './movies-list.scss'
})
export class MoviesList {
  readonly data = inject(DataService);
  readonly router = inject(Router);

  readonly movies = toSignal(this.data.getAllMovies(), {
    initialValue: []
  });

  goToMovieDetails(movieId: number) {
    this.router.navigate(['/movies', movieId]);
  }

}
