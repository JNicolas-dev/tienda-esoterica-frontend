import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-carrito',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './carrito.html'
})
export class CarritoComponent implements OnInit {

  carrito: any[] = [];
  total = 0;

  constructor(private api: ApiService) {}

  ngOnInit() {
    this.carrito = JSON.parse(localStorage.getItem('carrito') || '[]');
    this.total = this.carrito.reduce((acc, p) => acc + p.precio, 0);
  }

  comprar() {
    const pedido = {
      productos: this.carrito.map(p => ({
        productoId: p._id,
        cantidad: 1
      })),
      total: this.total
    };

    this.api.crearPedido(pedido).subscribe(() => {
      alert('Pedido realizado');
      localStorage.removeItem('carrito');
      this.carrito = [];
    });
  }
}