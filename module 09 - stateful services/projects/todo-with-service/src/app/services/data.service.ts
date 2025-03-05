import { Injectable, signal } from '@angular/core';
import { Todo } from '../models/todo.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  // data
  readonly #items = signal<Todo[]>([
    { caption: 'Learn Angular', isCompleted: true },
    { caption: 'Learn RxJS', isCompleted: false },
    { caption: 'Learn Zone.js', isCompleted: false }
  ]);

  readonly items = this.#items.asReadonly();

  addTodo(caption: string) {
    const newTodo: Todo = {
      caption, 
      isCompleted: false
    }

    this.#items.update(vals => [...vals, newTodo]);
  }

  completeTodo(index: number) {
    this.#items.update(vals => vals.map((item, i) => (i === index) 
          ? {...item, isCompleted: true }
          : item
        ));
  }
}
