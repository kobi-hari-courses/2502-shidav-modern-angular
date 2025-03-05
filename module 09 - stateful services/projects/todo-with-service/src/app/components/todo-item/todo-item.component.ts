import { Component, computed, inject, input } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-todo-item',
  imports: [],
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.scss', 
  host: {
    '(click)': 'completeTodo()'
  }
})
export class TodoItemComponent {
  readonly index = input.required<number>();
  readonly #data = inject(DataService);
  readonly items = this.#data.items;

  readonly todo = computed(() => this.items()[this.index()]);


  completeTodo() {
    this.#data.completeTodo(this.index());
  }
}
