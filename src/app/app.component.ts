import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DashboardComponent],
  template: '<app-dashboard></app-dashboard>',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'shopping-cart-app';
}
