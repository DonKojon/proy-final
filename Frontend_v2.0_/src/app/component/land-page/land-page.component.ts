import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-land-page',
  standalone: false,
  templateUrl: './land-page.component.html',
  styleUrl: './land-page.component.css'
})
export class LandPageComponent {

  constructor(private router: Router) {}

  irALogin() {
    this.router.navigate(['/login']);
  }

}

