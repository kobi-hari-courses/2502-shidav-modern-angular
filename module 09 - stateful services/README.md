# Module 09 - Stateful services in Angular
## Projects:

|     |     |
| --- | --- |
| [Todo With Service](./projects/todo-with-service/) | Simple Todo app with signal based service |
| [Quiz with Service](./projects/quiz-with-service/) | Intermidiate Quiz app with signal based service |

## Summary
In this module we saw how to create stateful services using signals. 
1. We saw how to define our **core state** using private writeable signals

```typescript
 readonly #items = signal<Todo[]>([
    { caption: 'Learn Angular', isCompleted: true },
    { caption: 'Learn RxJS', isCompleted: false },
    { caption: 'Learn Zone.js', isCompleted: false }
  ]);
```

2. We saw how to define our **derived state** using public readonly computed signals.

```typescript
  readonly items = this.#items.asReadonly();
```

3. We saw how to expose updater methods that modify the state using immutable syntax

```typescript
  addTodo(caption: string) {
    const newTodo: Todo = {
      caption, 
      isCompleted: false
    }

    this.#items.update(vals => [...vals, newTodo]);
  }
```

4. We saw how to consume the services in the components

- In the typescript
```typescript
export class TodoListComponent {
  readonly #data = inject(DataService);

  readonly todos = this.#data.items;

}
```
* In the html
```html
@for(item of todos(); track $index) {
    <app-todo-item [index]="$index"/>
}
```

