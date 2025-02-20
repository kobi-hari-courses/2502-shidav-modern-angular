export interface Person { 
    readonly name: string;
    readonly age: number;
}


let p: Person = {
    name: 'Yariv',
    age: 35
}

p = {
    ...p, 
    age: 36
}