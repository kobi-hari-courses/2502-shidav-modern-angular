import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-tool-bar',
  imports: [RouterModule],
  templateUrl: './tool-bar.html',
  styleUrl: './tool-bar.scss'
})
export class ToolBar {
  readonly auth = inject(AuthService);

}
