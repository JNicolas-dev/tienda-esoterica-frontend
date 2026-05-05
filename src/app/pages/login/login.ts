import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.html'
})
export class LoginComponent {

  email = '';
  password = '';
  nombre = '';

  constructor(private api: ApiService) {}

  login() {
    this.api.login({ email: this.email, password: this.password })
      .subscribe((res: any) => {
        localStorage.setItem('token', res.token);
        alert('Login exitoso');
      });
  }

  register() {
    this.api.register({
      nombre: this.nombre,
      email: this.email,
      password: this.password
    }).subscribe(() => alert('Registrado'));
  }
}