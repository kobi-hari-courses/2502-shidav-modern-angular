import { ChangeDetectionStrategy, ChangeDetectorRef, Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css', 
})
export class AppComponent {
 
  readonly myCounter = signal(42);

  getValue() {
    console.log('Get Value executed');
    return new Date().toString();
  }

  doNothing() {
      
  }

  constructor() {

    setInterval(() => {
      this.myCounter.update(val => val + 1);
      console.log('I have changed the counter to ', this.myCounter());
    }, 2000);
  }
}
