import { CommonModule } from '@angular/common';
import { Component, effect, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { data, orderBy, replaceAll } from './app.helpers';
import { Person } from './models/person.model';

@Component({
  selector: 'app-root',
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  readonly sig1 = signal<Person[]>([
    { name: 'Yariv', age: 35 }, 
    { name: 'Piglet', age: 10 },
    { name: 'Tigger', age: 2 },
  ]);

  sortByName() {
    this.sig1.update(val => orderBy(val, v => v.name));
  }

sortByAge() {
  this.sig1.update(val => orderBy(val, v => v.age));
}

addNewPerson(name: string, age: number) {
  this.sig1.update(val => [...val, {name, age}])
}

removeByName(name: string) {
  this.sig1.update(val => val.filter(p => p.name !== name));
}

modifyAge(name: string, age: number) {
  this.sig1.update(val => replaceAll(
    val, 
    p => p.name === name, 
    p => ({...p, age})
  ));
}

constructor() {
  effect(() => {
    console.log('sig1 changed to', this.sig1());
  })
}



//   readonly sig1 = signal(data);

//   sortByName() {
//     this.sig1.update(val => orderBy(val, v => v.name));
//   }

// sortByAge() {
//   this.sig1.update(val => orderBy(val, v => v.age));
// }

// constructor() {
//   effect(() => {
//     console.log('sig1 changed to', this.sig1());
//   })
// }

  // readonly sig1 = signal([1, 2, 3, 4, 5, 6]);

  //   addToArray() {
  //     this.sig1.update(val => [
  //       ...val.slice(0, val.length / 2), 
  //       val.length + 1, 
  //       ...val.slice(val.length / 2)]);
  //   }

  // removeFromArray() {
  //   this.sig1.update(val => [
  //     ...val.slice(0, (val.length / 2)), 
  //     ...val.slice((val.length / 2) + 1)]);
  // }

  // constructor() {
  //   effect(() => {
  //     console.log('sig1 changed to', this.sig1());
  //   })
  // }



  // readonly mispar = signal({x: 42, y: 50});

  // changeSignalTo42() {
  //   this.mispar.update(val => {
  //     val.x = 43;
  //     return val;
  //   })
  // }

  // changeSignalTo43() {
  //   this.mispar.set({x: 43, y: 50});    
  // }

  // constructor() {
  //   effect(() => {
  //     console.log('mispar changed to', this.mispar());
  //   })
  // }



  // Example number 2 - Arrays
  //   readonly mispar = signal([1, 2, 3]);

  // changeSignalTo42() {
  //   this.mispar.update(val => {
  //     val.push(42);
  //     console.log('inside the setter, va = ', this.mispar());
  //     return val;
  //   });    
  // }

  // changeSignalTo43() {
  //   this.mispar.set([1, 2, 43]);    
  // }

  // constructor() {
  //   effect(() => {
  //     console.log('mispar changed to', this.mispar());
  //   })
  // }


  // Example number 1 - Numbers
  // readonly mispar = signal(42);

  // changeSignalTo42() {
  //   this.mispar.set(42);    
  // }

  // changeSignalTo43() {
  //   this.mispar.set(43);    
  // }

  // constructor() {
  //   effect(() => {
  //     console.log('mispar changed to', this.mispar());
  //   })
  // }
}
