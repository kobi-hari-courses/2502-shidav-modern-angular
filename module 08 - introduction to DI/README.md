# Module 08 - Introduction to Dependency Injection in Angular
## Projects:

|     |     |
| --- | --- |
| [Fun with DI](./projects/fun-with-di/) | Introduction to DI |

## Summary
### Introduction to Dependency Injection 
* We talked about the motivation to use a dependency injection infrastructure
* We saw how to create a **service** - an object encapsulating a bit of logic and perhaps data
* We defined the terms:
    * **Consumer** - the object that requires dependency
    * **Injection request / token** - The item that the consumer asks for, to be provided using dependency in the constructor
    * **Injector** - An object responsible for resolving (providing, injecting) the injection request
    * **Provider** - The algorithm, or logic, used to resolve the injected object
* We saw how to define injecter and provider using the `providers` property of the `config`, or Component
* We understood the effect of defining a component as injector, and how to use the component hierarchy as injector hierarchy
* We saw how to define a provider that used another class instead of the requested class
* We saw other types of providers:
  * `useClass` - defines a class provider, essentialy calling `new` to instantiate an object
  * `useValue` - provide an already created value
* We saw examples of 2 additional providers: 
  * `useExisting` - provides the value of a different request / token
  * `useFactory` - calls a function to calculated the provided value
* We saw how to define a service as Injectable so it can also consume dependencies
  * We talked about the **Tree Shaking** Algorithm and how to define "tree shakable" services

### Advanced DI
* There are other types of "requests" or "token".
    * We can create a new constant of type  `InjectionToken` to serve as alternative token.
    * We can use the `useValue` providers to set the value of the token
    * We consume the token using the `@Inject` decorator
    * OR using the `inject` function

```typescript
const MY_VALUE = new InjectionToken<string>('MY_VALUE');
```

- You can set the value using a provider

```typescript
providers: [
    {provide: MY_VALUE, useValue: 'Hello World'}
]
```

- You could inject it using the `@Inject` decorator.

```typescript
constructor(private @Inject(MY_VALUE) myValue: number) {}
```


- But now - better way - you can inject it using the `inject` function

```typescript
class MyComponent {
    readonly myValue = inject(MY_VALIUE);
}
```

- Typescript can infer the type of the value from the generic type of the injection context
