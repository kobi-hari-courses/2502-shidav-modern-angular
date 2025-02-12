import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  // state
  readonly colors = ['red', 'green', 'blue', 'purple', 'brown', 'black', 'teal'];
  readonly fonts = ['Arial', 'Times New Roman', 'Courier New', 'Georgia', 'Verdana', 'Comic Sans MS', 'Impact'];
  readonly sizes = ['8px', '12px', '16px', '20px', '24px', '28px', '32px'];

  selectedColor = this.colors[0];
  selectedFont = this.fonts[0];
  selectedSize = this.sizes[0];

  // actions
  setSelectedColor(value: string) {
    console.log('selected color:', value);
    this.selectedColor = value;
  }

  setSelectedFont(value: string) {
    console.log('selected font:', value);
    this.selectedFont = value;
  }

  setSelectedSize(value: string) {
    console.log('selected size:', value);
    this.selectedSize = value;
  }
}
