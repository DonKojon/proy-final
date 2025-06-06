import { Router, NavigationEnd } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  mostrarNavbar = true;
  isNavbarCollapsed = false;

  constructor(private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        const rutasSinNavbar = ['/login', '/'];
        this.mostrarNavbar = !rutasSinNavbar.includes(this.router.url);
      }
    });
  }

  onNavbarCollapse(collapsed: boolean) {
    this.isNavbarCollapsed = collapsed;
  }
}
