import { Component } from '@angular/core';

import { FormsModule } from '@angular/forms';

import { CommonModule } from '@angular/common';

import { Router } from '@angular/router';

import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login.html'
})

export class Login {

  email = '';
  password = '';

  mensaje = '';

  constructor(
    private auth: AuthService,
    private router: Router
  ) {}

  login() {

    const data = {

      email: this.email,
      password: this.password

    };

    this.auth.login(data)
      .subscribe({

        next: (res) => {

          localStorage.setItem(
            'usuario',
            JSON.stringify(res.usuario)
          );

          this.router.navigate(['/']);
        },

        error: (err) => {

          this.mensaje = err.error.message;
        }

      });
  }
}