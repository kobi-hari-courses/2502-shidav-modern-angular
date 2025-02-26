export class AdditionService {
    readonly id = Math.ceil(Math.random() * 1000000);

    constructor() {
        console.log(`AdditionService ${this.id} created`);
    }

    add(a: number, b: number): number {
        return a + b;
    }
}



/*

Dependency Injection in Angular

1. Consumer - CalcComponent
2. Request (token) - AdditionService
3. Injector - Collection of instance per request (token)
4. Provider - instantiates the instances for the injector





*/