import { Component, OnInit } from '@angular/core';

import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-carrito',

  standalone: true,

  imports: [
    CommonModule
  ],

  templateUrl: './carrito.html',

  styleUrls: ['./carrito.css']
})

export class CarritoComponent implements OnInit {

  carrito: any[] = [];

  total = 0;

  ngOnInit(): void {

    if (typeof window !== 'undefined') {

      this.carrito = JSON.parse(
        localStorage.getItem('carrito') || '[]'
      );

      this.calcularTotal();

    }

  }

  aumentarCantidad(producto: any) {

    producto.cantidad++;

    this.guardarCarrito();

  }

  disminuirCantidad(producto: any) {

    if (producto.cantidad > 1) {

      producto.cantidad--;

      this.guardarCarrito();

    }

  }

  eliminarProducto(index: number) {

    this.carrito.splice(index, 1);

    this.guardarCarrito();

  }

  calcularTotal() {

    this.total = this.carrito.reduce(

      (acc, item) =>

        acc + (item.precio * item.cantidad),

      0

    );

  }

  guardarCarrito() {

    localStorage.setItem(
      'carrito',
      JSON.stringify(this.carrito)
    );

    this.calcularTotal();

  }
  finalizarCompra() {

  let mensaje = '🔮 *Nuevo Pedido* %0A%0A';

  this.carrito.forEach((p: any) => {

    mensaje += `📦 ${p.nombre} x${p.cantidad} - $${p.precio * p.cantidad}%0A`;

  });

  mensaje += `%0A💰 *Total:* $${this.total}`;

  const telefono = '573001112233';

  const url = `https://wa.me/${telefono}?text=${mensaje}`;

  window.open(url, '_blank');

}

}