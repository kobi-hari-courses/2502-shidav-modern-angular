import { Component, inject } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-account',
  imports: [],
  templateUrl: './account.html',
  styleUrl: './account.scss'
})
export default class Account {
  readonly auth = inject(AuthService);

}
