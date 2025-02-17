# Exercises for module 06 - Component Authoring

## Exercise 1 - `input`, `output` in Modren Angular

In this exercise, you will practice using Angular signals to manage an array of numbers. Each number in the array will be tied to a dynamic `CounterComponent`, where the parent component will maintain the overall state of the array.

### 1. Main App Component
You will create a signal to hold an array of numbers. Each number will be passed to a separate `CounterComponent`. The main app will also handle updates from the child components and update the parent when needed.

### 2. CounterComponent
Each `CounterComponent` will receive the number from the parent via an `input`. The component will render increment and decrement buttons and emit the updated value back to the parent when these buttons are clicked.

#### Hint
- Use `input` and `output` but for now do not use the `model`

## Instructions

### Main App Component

1. Create 3 numeric signals with values: 0, 5, 10
2. Dynamically render a `CounterComponent` for each number in the array
3. Pass each number to the child component via an `input.required`.
4. When the child component emits a new value, update the corresponding value using the signal's `update` method.

### CounterComponent

1. Use `input.required` to accept the current number from the parent.
2. Render two buttons to increment and decrement the number.
3. Use `output` to emit the updated number back to the parent component when the buttons are clicked.

## Exercise 2 - Using `model`

In this exercise, you will modify the `CounterComponent` to use Angular's `model` instead of `input` and `output`.

### Instructions

1. **Update the CounterComponent to use `model`**:
    - Remove the `input` decorator from the property that receives the number from the parent.
    - Remove the `output` decorator from the property that emits the updated number back to the parent.
    - Add a new property with the `model` function to bind the number.

2. **Modify the template of CounterComponent**:
    - Update the template to bind the new `model` property to the increment and decrement buttons.
    - Remember to use the `update` method to modify the model signal

3. **Update the Main App Component**:
    - first notice that you do not **HAVE** to modify anything becuase it still work. You may need to change the name of the output event, but aprat from that , it all works.
    - But... we would prefer to use the `banana in a box` syntax, now that we can
    - Modify the main app component to use the `[()]` binding instead of `input` and `output`.

