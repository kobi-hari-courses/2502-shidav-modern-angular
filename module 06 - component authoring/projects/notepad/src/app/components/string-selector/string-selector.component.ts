import { Component, input, model, output } from '@angular/core';

@Component({
  selector: 'app-string-selector',
  imports: [],
  templateUrl: './string-selector.component.html',
  styleUrl: './string-selector.component.css'
})
export class StringSelectorComponent {
  readonly options = input.required<string[]>();

  
  readonly selectedOption = model.required<string>();
  // readonly selectedOption = input('');
  //  readonly selectionChanged = output<string>();



  onSelect(value: string) {
    console.log('I selected an item', value);
    this.selectedOption.set(value);
    // this.selectionChanged.emit(value);

  }

}
