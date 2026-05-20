import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ApiService {

private apiUrl = 'http://localhost:3000/api/productos';
  constructor(
    private http: HttpClient
  ) {}

  getProductos() {
    return this.http.get(this.apiUrl);
  }

  crearProducto(producto: any) {

    return this.http.post(
      this.apiUrl,
      producto
    );

  }

  eliminarProducto(id: number) {

    return this.http.delete(
      `${this.apiUrl}/${id}`
    );

  }
  actualizarProducto(id: number, producto: any) {

  return this.http.put(

    `${this.apiUrl}/${id}`,
    producto

  );

}

}