import { Inject, inject, Injectable } from "@angular/core";
import { PREFIX_TOKEN } from "../tokens/prefix.token";

@Injectable({
    providedIn: 'root'
})
export class HistoryService {
    readonly id = Math.ceil(Math.random() * 1000000);
    readonly prefix = inject(PREFIX_TOKEN);

    readonly records: string[] = [];

    // constructor(@Inject(PREFIX_TOKEN) public myPrefix: string) {
    constructor() {
        console.log(`HistoryService ${this.id} created`);
    }

    audit(txt: string) {
        this.records.push(`${this.prefix} ${txt}`);
        console.log('History', this.id, this.records);
    }

}