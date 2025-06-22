import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { Movie } from './models/movie.model';
import { toSignal } from '@angular/core/rxjs-interop';
import { CommonModule } from '@angular/common';
import { ToolBar } from "./components/tool-bar/tool-bar";
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [CommonModule, ToolBar, RouterModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
}
