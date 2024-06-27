import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';
import { RouterOutlet, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Livros';
  
  constructor(
    private router: Router
  ) { }
  
  goHome(): void {
    this.router.navigate(['/home']);
  }

  goAbout(): void {
    this.router.navigate(['/about']);
  }
}
