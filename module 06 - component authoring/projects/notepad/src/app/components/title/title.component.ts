import { Component, computed, input, signal } from "@angular/core";
import { isColorDark } from "./title.helpers";

@Component({
    selector: 'app-title', 
    templateUrl: './title.component.html', 
    styleUrl: './title.component.css', 
    host: {
        '[style.background]': 'color()'
    }
})
export class TitleComponent {
    readonly caption = input.required<string>();

    readonly color = input('lightcoral');

    readonly textColor = computed(() => isColorDark(this.color()) 
        ? 'white' 
        : 'black');

    constructor() {
        console.log('TitleComponent created');
    }

}