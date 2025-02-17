# Module 06 - Component Authoring APIs using signals

## Projects:
|     |     |
| --- | --- |
| [Notepad](./projects/notepad/) | Authoring components using `input`, `output` and `model` |

## Summary
### Authoring components in angular
* We saw how to manually create a component
    * Create a `.ts` file with a class that reprensents the component
    * Use the `@Component` decorator to mark to angular that the class reprensents a component and configure the selector, the template, the style, and the fact that it is standalone
    * Create an html and css files and add their path to the component decorator
* We then saw how to use the cli to create it
```cmd
ng g c components/comp-name
```

### Using the signal based component APIs
* Modern Angular comes with new ways to define communication between components
* We saw how to define an input using the `input` function.
* We saw how to make it mandatory using the `input.required` function.
* We saw how to define an output using the `output` function.
* We saw how to define a pair of input and output for the same data using the `model` function.
* We saw how to make it mandatory using the `model.required` function
* Finally, we saw that we can use it seperatly, as input, as output or as two way bounded signal using the syntaxes:

### Populating `inputs`, `outputs` and `models`

* We saw that we can populate input using the simplified syntax
```html
<app-component caption="Hello World">
```

But this is only for strings, and for static values, that do not change.


* We saw that we can use the **Binding Syntax** to pass any expression, so that the value is re-applied when it changes
* We saw that we can populate input using the simplified syntax
```html
<app-component [caption]="myTextSignal()">
```

* We saw how to bind to inputs, outputs and models:

```html
<!-- Assuming value is a writeable signal -->
<app-comp [data]="value()"/>
<app-comp (dataChange)="value.set($event)"/>
<app-comp [(data)]="value">
```

### The `host` property
* We saw that we can bind to expressions not only on template elements but also on the host element itself
* For that, we need to use the `host` property

```typescript
@Component({
    selector: 'app-my-component', 
    template: './my-component.component.html', 
    host: {
        '[style.color]', 'color()'
    }
})
export class MyComponent {
    readonly color = signal('blue');
}

```

* You can use any element property, (`[class.xxx]`, `[style.xxx]` and more that we did not talk about yet);
* You can also bind to events
* You can use expressions that rely on signals
