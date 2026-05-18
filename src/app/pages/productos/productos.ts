import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from '../../services/api.service';
import { CarritoService } from '../../services/carrito.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-productos',

  standalone: true,

  imports: [
    CommonModule
  ],

  templateUrl: './productos.html',

  styleUrls: ['./productos.css']
})

export class Productos implements OnInit {

  productos: any[] = [];

  loading = true;

  error = false;

  constructor(
    private api: ApiService,
    private carritoService: CarritoService
  ) {}

  ngOnInit(): void {

    this.obtenerProductos();

  }

  obtenerProductos() {

    this.api.getProductos()
      .subscribe({

        next: (res: any) => {

          console.log('PRODUCTOS:', res);

          this.productos = res;

          this.loading = false;

        },

        error: (err) => {

          console.log(err);

          this.error = true;

          this.loading = false;

        }

      });

  }

  agregar(producto: any) {

    let carrito = [];

    if (typeof window !== 'undefined') {

      carrito = JSON.parse(
        localStorage.getItem('carrito') || '[]'
      );

      const existe = carrito.find(
        (p: any) => p.id === producto.id
      );

      if (existe) {

        existe.cantidad++;

      } else {

        carrito.push({

          ...producto,
          cantidad: 1

        });

      }

      localStorage.setItem(
        'carrito',
        JSON.stringify(carrito)
      );

      this.carritoService.actualizarCantidad();

      Swal.fire({

      title: 'Producto agregado',
      text: 'Se añadió al carrito correctamente',
      icon: 'success',
      background: '#1a1a1a',
      color: '#fff',
      confirmButtonColor: '#ffc107'

});

    }

  }

}