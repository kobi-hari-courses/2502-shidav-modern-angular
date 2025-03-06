import { Component, inject } from '@angular/core';
import { AppStore } from './store/app.store';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss', 
})
export class AppComponent {
  readonly store = inject(AppStore);

}
