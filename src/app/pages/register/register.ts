import { Component } from '@angular/core';

import { FormsModule } from '@angular/forms';

import { CommonModule } from '@angular/common';

import { Router } from '@angular/router';

import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',

  standalone: true,

  imports: [
    CommonModule,
    FormsModule
  ],

  templateUrl: './register.html'
})

export class Register {

  form = {

    nombre: '',
    email: '',
    password: ''
  };

  constructor(
    private auth: AuthService,
    private router: Router
  ) {}

  registrar() {

    this.auth.register(this.form)
      .subscribe({

        next: (res: any) => {

          alert('Usuario registrado');

          this.router.navigate(['/login']);

        },

        error: (err) => {

          console.log(err);

          alert('Error registrando usuario');

        }

      });

  }

}