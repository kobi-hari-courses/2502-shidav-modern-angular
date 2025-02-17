import { Component, signal } from '@angular/core';
import { TitleComponent } from './components/title/title.component';
import { StringSelectorComponent } from './components/string-selector/string-selector.component';

@Component({
  selector: 'app-root',
  imports: [TitleComponent, StringSelectorComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  // state
  readonly colors = signal( ['red', 'green', 'blue', 'purple', 'cyan', 'brown', 'black', 'teal']);
  readonly fonts = signal(['Arial', 'Times New Roman', 'Courier New', 'Georgia', 'Verdana', 'Comic Sans MS', 'Impact']);
  readonly sizes = signal(['8px', '12px', '16px', '20px', '24px', '28px', '32px']);

  selectedColor = signal(this.colors()[0]);
  selectedFont = signal(this.fonts()[0]);
  selectedSize = signal(this.sizes()[0]);

  // actions
  // setSelectedColor(value: string) {
  //   console.log('selected color:', value);
  //   this.selectedColor.set(value);
  // }

  // setSelectedFont(value: string) {
  //   console.log('selected font:', value);
  //   this.selectedFont.set(value);
  // }

  // setSelectedSize(value: string) {
  //   console.log('selected size:', value);
  //   this.selectedSize.set(value);
  // }
}
