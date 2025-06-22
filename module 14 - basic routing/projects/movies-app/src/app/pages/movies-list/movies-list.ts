import { Component, inject } from '@angular/core';
import { DataService } from '../../services/data.service';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-movies-list',
  imports: [],
  templateUrl: './movies-list.html',
  styleUrl: './movies-list.scss'
})
export class MoviesList {
  readonly data = inject(DataService);
  readonly movies = toSignal(this.data.getAllMovies(), {
    initialValue: []
  });

}
