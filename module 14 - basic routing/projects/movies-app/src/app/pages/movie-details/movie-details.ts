import { Component, computed, inject, input } from '@angular/core';
import { DataService } from '../../services/data.service';
import { httpResource } from '@angular/common/http';
import { rxResource } from '@angular/core/rxjs-interop';
import { Movie } from '../../models/movie.model';

@Component({
  selector: 'app-movie-details',
  imports: [],
  templateUrl: './movie-details.html',
  styleUrl: './movie-details.scss'
})
export class MovieDetails {
  readonly movieId = input.required<string>();
  readonly idValue = computed(() => Number(this.movieId()));

  readonly data = inject(DataService);
  readonly movie = rxResource<Movie | null, number>({
    params: () => this.idValue(),
    stream: (req) => this.data.getMovieById(req.params), 
    defaultValue: null
  });

  readonly poster = computed(() => `http://localhost:3000/images/movies/${this.movie.value()?.posterImage}`);


}
