import { effect, Injectable, signal } from "@angular/core";

@Injectable({ providedIn: 'root'})
export class AuthService {
    readonly initialValue = JSON.parse(localStorage.getItem('isLoggedIn') || 'false') as boolean;
    readonly #isLoggedIn = signal(this.initialValue);

    readonly isLoggedIn = this.#isLoggedIn.asReadonly();

    login() {
        this.#isLoggedIn.set(true);
    }
    logout() {
        this.#isLoggedIn.set(false);
    }

    constructor() {
        effect(() => {
            const isLoggedIn = this.isLoggedIn();
            localStorage.setItem('isLoggedIn', JSON.stringify(isLoggedIn));

        });
    }
}