### Immutable data types
* We talked about working with immutable data types
* We saw how to create them using readonly properties on interfaces
* We saw why it is important to use interfaces and not classes
* We saw how to "modify" and immutable object
    - how to copy values from source
    - how to give new values to specific properties
```typescript
const obj2 = {
    ...obj1, 
    name: 'Changed'
}
```
* We saw how to "modify" immutable arrays
    - how to add values before and after the array
    ```typescript
    const ar1 = [1, 2, 3];
    const ar2 = [0, ...ar1, 4, 5];
    ```
    - how to replace specific item
    ```typescript
    const ar1 = [2, 4, 6, 8];
    const ar2 = ar1.map(i => (i === 4) ? 4.5 : i);
    ```
    - how to remove specific item
    ```typescript
    const ar1 = [2, 4, 5, 6, 8];
    const ar2 = ar1.filter(i => i !== 5);
    ```
    - how to replace item at specific index
    ```typescript
    const ar1 = [2, 4, 5, 8, 10];
    const ar2 = ar1.map((i, index) => index === 2 ? 6 : i)
    ```
    - how to delete at index
    ```typescript
    const ar1 = [2, 4, 5, 6, 8, 10];
    const ar2 = ar1.filter((i, index) => index !== 2);
    ```
* We saw that when we have signals of reference type values (objects and arrays), if we mutate the object, the signal does not fire
* We saw that when we use immutable types, the signals do fire
* We understood why it is much more performant, to use immutable types in angular, despite the overhead of copying the data
