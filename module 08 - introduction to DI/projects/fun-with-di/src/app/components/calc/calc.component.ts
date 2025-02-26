import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-calc',
  imports: [],
  templateUrl: './calc.component.html',
  styleUrl: './calc.component.scss'
})
export class CalcComponent {
  readonly result = signal(-1);

  add(a: number, b: number) {
    this.result.set(a + b);
  }


}
