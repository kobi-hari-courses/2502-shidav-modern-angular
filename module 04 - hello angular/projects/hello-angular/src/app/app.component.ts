import { Serializer } from '@angular/compiler';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  // State (data)
  keyword: string = '';
  results: string[] = [];
  isBusy: boolean = false;


  // Actions (methods)
  setKeyword(value: string) {
    this.keyword = value;
    console.log('Current keyword:', this.keyword);
  }

  search() {
    this.isBusy = true;
    this.results = [];

    setTimeout(() => {
      this.isBusy = false;
      this.results = [
        this.keyword.toUpperCase(), 
        this.keyword.toLowerCase(),
        `*** ${this.keyword} ***`,
      ]
    }, 5000);

  }

}


