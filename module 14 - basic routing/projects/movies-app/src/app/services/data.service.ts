import { HttpClient } from "@angular/common/http";
import { inject, Inject, Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Movie } from "../models/movie.model";

@Injectable({
  providedIn: 'root'
})
export class DataService {
  readonly #baseUrl = 'http://localhost:3000';
  readonly #http = inject(HttpClient);

  getAllMovies(): Observable<Movie[]> {
    return this.#http.get<Movie[]>(`${this.#baseUrl}/movies`);
  }

  getMovieById(id: number): Observable<Movie> {
    return this.#http.get<Movie>(`${this.#baseUrl}/movies/${id}`);
  }

}