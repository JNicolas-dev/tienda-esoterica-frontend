import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './productos.html'
})
export class ProductosComponent implements OnInit {

  productos: any[] = [];
  loading = true;
  error = false;

  constructor(private api: ApiService) {}

  ngOnInit() {
    this.api.getProductos().subscribe({
      next: (res: any) => {
        this.productos = res;
        this.loading = false;
      },
      error: () => {
        this.error = true;
        this.loading = false;
      }
    });
  }

  agregar(producto: any) {
    let carrito = JSON.parse(localStorage.getItem('carrito') || '[]');
    carrito.push(producto);
    localStorage.setItem('carrito', JSON.stringify(carrito));
    alert('Producto agregado');
  }
}