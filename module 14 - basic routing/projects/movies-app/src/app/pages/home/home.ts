import { Component, inject, input } from '@angular/core';
import { NUMERIC_VALUE_TOKEN } from '../../token/numeric-value.token';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export default class Home {
  readonly moviesCount = input.required<number>();
  readonly numericValue = inject<number>(NUMERIC_VALUE_TOKEN);

}

