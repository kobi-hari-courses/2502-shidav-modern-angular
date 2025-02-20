export function addToTheEnd<T>(arr: T[], value: T): T[] {
    return [...arr, value];
}

export function addToTheStart<T>(arr: T[], value: T): T[] {
    return [value, ...arr];
}

export  function addAt<T>(arr: T[], value: T, index: number): T[] {
    return [
        ...arr.slice(0, index), 
        value, 
        ...arr.slice(index)];
}

export  function removeAt<T>(arr: T[], index: number): T[] {
    return [
        ...arr.slice(0, index), 
        ...arr.slice(index + 1)];
}

export function setAt<T>(arr: T[], index: number, calculator: (val: T) => T): T[] {
    const newValue = calculator(arr[index]);
    return [
        ...arr.slice(0, index), 
        newValue, 
        ...arr.slice(index + 1)];
}


export function removeAll<T>(arr: T[], value: T): T[] {
    const res = arr.filter((v: T, i: number) => v !== value);
    return res;
}

export function onlyEven<T>(arr: T[]): T[] {
    return arr.filter((_: T, i: number) => i % 2 === 0);
}

export function replace<T>(arr: T[], oldValue: T, newValue: T): T[] {
    return arr.map(val => val === oldValue ? newValue : val);
}

export function order<T>(arr: T[]): T[] {
    return [...arr].sort();
}

export function orderBy<T, K>(arr: T[], bocher: (val: T) => K): T[] {
    return [...arr].sort((a, b) => {
        const aValue = bocher(a);
        const bValue = bocher(b);

        if (aValue < bValue) return -1;
        return 1;
    })
}

export function replaceAll<T>(arr: T[], 
        condition: (val: T) => boolean, 
        updater: (val: T) => T
    ): T[] {
        return arr.map(item => condition(item)
        ? updater(item)
        : item
            );
    }

export const data: {name: string, age: number}[] = [
    { name: 'Yariv', age: 35 },
    { name: 'Piglet', age: 32 },
    { name: 'Tigger', age: 31 },
    { name: 'Pooh', age: 30 },
    { name: 'Eeyore', age: 38 },
    { name: 'Roo', age: 32 },
    { name: 'Kanga', age: 31 },
    { name: 'Owl', age: 30 },
    { name: 'Christopher Robin', age: 36 },
    { name: 'Heffalumps', age: 37 },
    { name: 'Woozles', age: 38 },
]

const dataByName = orderBy(data, k => k.name);
const dataByAge = orderBy(data, item => item.age);



const x = [1, 2, 4, 6, 2, 9, 3, 2, 10];

setAt(x, 2, () => 100);
setAt(x, 2, val => val + 1);

replace(x, 2, 100);




