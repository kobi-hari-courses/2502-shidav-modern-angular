import { ChangeDetectionStrategy, ChangeDetectorRef, Component, computed, effect, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { single } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css', 
})
export class AppComponent {
 
  readonly myCounter = signal(42);

  readonly a = signal(10);
  readonly b = signal(20);
  readonly sum = computed(() => this.a() + this.b());
  readonly doubleSum = computed(() => this.sum() * 2);

  incA() {
    this.a.update(val => val + 1);
  }

  incB() {
    this.b.update(val => val + 1);
  }

  incADecB() {
    this.a.update(val => val + 1);
    this.b.update(val => val - 1);
  }

  getValue() {
    console.log('Get Value executed');
    return new Date().toString();
  }

  doNothing() {
      
  }

  constructor() {
    var v = this.myCounter();
    this.myCounter.set(10);
    this.myCounter.update(v => v + 1);

    effect(() => {
      console.log('a = ', this.a());
      console.log('b = ', this.b());
    });

    effect(() => {
      console.log('sum = ', this.sum());
    });


    // setInterval(() => {
    //   this.myCounter.update(val => val + 1);
    //   console.log('I have changed the counter to ', this.myCounter());
    // }, 2000);
  }
}
