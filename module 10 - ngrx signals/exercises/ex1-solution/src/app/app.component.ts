import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { XyPairStore } from './store/xy-pair.store';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  readonly store = inject(XyPairStore);
}
