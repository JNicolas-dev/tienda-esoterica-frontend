import { Component, OnInit } from '@angular/core';

import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';

import { ApiService } from '../../services/api.service';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-admin',

  standalone: true,

  imports: [
    CommonModule,
    FormsModule
  ],

  templateUrl: './admin.html',

  styleUrls: ['./admin.css']
})

export class AdminComponent implements OnInit {

  productos: any[] = [];

  modoEdicion = false;

  productoEditandoId: number | null = null;

  producto = {

    nombre: '',
    descripcion: '',
    precio: 0,
    categoria: '',
    imagen: ''

  };

  constructor(
    private api: ApiService
  ) {}

  ngOnInit(): void {

    this.obtenerProductos();

  }

  obtenerProductos() {

    this.api.getProductos()
      .subscribe((res: any) => {

        this.productos = res;

      });

  }

  crearProducto() {

    this.api.crearProducto(
      this.producto
    ).subscribe({

      next: () => {

        Swal.fire({

          title: 'Producto creado',

          icon: 'success',

          background: '#1a1a1a',

          color: '#fff',

          confirmButtonColor: '#ffc107'

        });

        this.obtenerProductos();

        this.limpiarFormulario();

      },

      error: (err) => {

        console.log(err);

        Swal.fire({

          title: 'Error creando producto',

          icon: 'error',

          background: '#1a1a1a',

          color: '#fff',

          confirmButtonColor: '#dc3545'

        });

      }

    });

  }

  editarProducto(producto: any) {

    this.modoEdicion = true;

    this.productoEditandoId = producto.id;

    this.producto = {

      nombre: producto.nombre,
      descripcion: producto.descripcion,
      precio: producto.precio,
      categoria: producto.categoria,
      imagen: producto.imagen

    };

  }

  actualizarProducto() {

    if (!this.productoEditandoId) return;

    this.api.actualizarProducto(

      this.productoEditandoId,
      this.producto

    ).subscribe({

      next: () => {

        Swal.fire({

          title: 'Producto actualizado',

          icon: 'success',

          background: '#1a1a1a',

          color: '#fff',

          confirmButtonColor: '#198754'

        });

        this.obtenerProductos();

        this.cancelarEdicion();

      },

      error: (err) => {

        console.log(err);

        Swal.fire({

          title: 'Error actualizando producto',

          icon: 'error',

          background: '#1a1a1a',

          color: '#fff',

          confirmButtonColor: '#dc3545'

        });

      }

    });

  }

  eliminarProducto(id: number) {

    Swal.fire({

      title: '¿Eliminar producto?',

      text: 'Esta acción no se puede deshacer',

      icon: 'warning',

      showCancelButton: true,

      confirmButtonColor: '#dc3545',

      cancelButtonColor: '#6c757d',

      confirmButtonText: 'Sí, eliminar',

      cancelButtonText: 'Cancelar',

      background: '#1a1a1a',

      color: '#fff'

    }).then((result) => {

      if (result.isConfirmed) {

        this.api.eliminarProducto(id)
          .subscribe(() => {

            this.obtenerProductos();

            Swal.fire({

              title: 'Producto eliminado',

              icon: 'success',

              background: '#1a1a1a',

              color: '#fff',

              confirmButtonColor: '#dc3545'

            });

          });

      }

    });

  }

  cancelarEdicion() {

    this.modoEdicion = false;

    this.productoEditandoId = null;

    this.limpiarFormulario();

  }

  limpiarFormulario() {

    this.producto = {

      nombre: '',
      descripcion: '',
      precio: 0,
      categoria: '',
      imagen: ''

    };

  }

}