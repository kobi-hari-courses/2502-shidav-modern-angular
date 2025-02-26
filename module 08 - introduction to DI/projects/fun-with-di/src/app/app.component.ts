import { Component } from '@angular/core';
import { CalcComponent } from "./components/calc/calc.component";

@Component({
  selector: 'app-root',
  imports: [CalcComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
}
