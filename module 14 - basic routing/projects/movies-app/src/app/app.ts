import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { Movie } from './models/movie.model';
import { toSignal } from '@angular/core/rxjs-interop';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
}
