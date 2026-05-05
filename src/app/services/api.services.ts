import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private API = 'http://localhost:3000/api';

  constructor(private http: HttpClient) {}

  getProductos() {
    return this.http.get(`${this.API}/productos`);
  }

  crearPedido(data: any) {
    return this.http.post(`${this.API}/pedidos`, data);
  }

  login(data: any) {
    return this.http.post(`${this.API}/auth/login`, data);
  }

  register(data: any) {
    return this.http.post(`${this.API}/auth/register`, data);
  }
}