import { Component, inject, signal } from '@angular/core';
import { AdditionService } from '../../services/addition.service';

@Component({
  selector: 'app-calc',
  imports: [],
  templateUrl: './calc.component.html',
  styleUrl: './calc.component.scss', 
  providers: [
    // {
    //   provide: AdditionService,
    //   useClass: AdditionService
    // }
  ]
})
export class CalcComponent {

readonly additionService = inject(AdditionService);

// constructor(
//   public additionService: AdditionService
// ) {}

  readonly result = signal(-1);



  add(a: number, b: number) {
    const res = this.additionService.add(a, b);
    this.result.set(res);
  }


}
