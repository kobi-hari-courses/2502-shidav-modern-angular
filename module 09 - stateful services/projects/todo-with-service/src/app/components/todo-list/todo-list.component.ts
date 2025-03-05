import { Component, inject } from '@angular/core';
import { DataService } from '../../services/data.service';
import { TodoItemComponent } from '../todo-item/todo-item.component';

@Component({
  selector: 'app-todo-list',
  imports: [TodoItemComponent],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.scss'
})
export class TodoListComponent {
  readonly #data = inject(DataService);

  readonly todos = this.#data.items;

}
