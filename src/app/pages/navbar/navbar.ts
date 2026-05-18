import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { CarritoService } from '../../services/carrito.service';
@Component({
  selector: 'app-navbar',
  standalone: true,

  imports: [
    CommonModule,
    RouterLink
  ],

  templateUrl: './navbar.html'
})

export class Navbar {

  constructor(
    public auth: AuthService,
    private router: Router,
    private carritoService: CarritoService
  ) {}

  logout() {

    this.auth.logout();

    this.router.navigate(['/login']);
    this.carritoService.cantidad$
    .subscribe(c => {

      this.cantidad = c;
    });
  }

  cantidad = 0;}