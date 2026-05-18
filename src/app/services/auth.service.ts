import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  private apiUrl = 'https://helpless-conductor-traps.ngrok-free.dev/api/auth';

  constructor(
    private http: HttpClient
  ) {}

  register(data: any): Observable<any> {

    return this.http.post(
      `${this.apiUrl}/register`,
      data
    );

  }

  login(data: any): Observable<any> {

    return this.http.post(
      `${this.apiUrl}/login`,
      data
    );

  }

  saveUsuario(usuario: any) {

    if (typeof window !== 'undefined') {

      localStorage.setItem(
        'usuario',
        JSON.stringify(usuario)
      );

    }

  }

  getUsuario() {

    if (typeof window !== 'undefined') {

      return JSON.parse(
        localStorage.getItem('usuario') || 'null'
      );

    }

    return null;
  }

  logout() {

    if (typeof window !== 'undefined') {

      localStorage.removeItem('usuario');

    }

  }

  isLoggedIn(): boolean {

  if (typeof window === 'undefined') {

    return false;

  }

  return !!localStorage.getItem('usuario');

}
isAdmin(): boolean {

  if (typeof window === 'undefined') {

    return false;

  }

  const usuario = JSON.parse(
    localStorage.getItem('usuario') || '{}'
  );

  return usuario.rol === 'admin';

}

}