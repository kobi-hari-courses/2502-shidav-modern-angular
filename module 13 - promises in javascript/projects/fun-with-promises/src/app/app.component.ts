import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  createPromise() {
    return new Promise<number>((resolve, reject) => {
      setTimeout(() => {
        if (Math.random() > 0.5) {
          resolve(42);
        } else {
          reject('Failed');
        }
      }, 3000);
    });
  }

  async go() {
    console.log('A');
    await this.start();
    console.log('B');

    

    // console.log('Started promise');

    // const p = this.createPromise();

    // let q = p.then((result) => {
    //   console.log('Promise resolved, with result', result);
    //   return 'Hello';
    // });

    // console.log('Go completed');
  }

  async start() {
    try {
      console.log('1');
      const p = this.createPromise();
      console.log('2');
  
      let result = await p; ///  p.then(start___2);
  
      // begining of start___2
  
      console.log('3');        
    } catch (e) {
      console.error('Error', e);
    }

    return 'Hello';
  }
}
