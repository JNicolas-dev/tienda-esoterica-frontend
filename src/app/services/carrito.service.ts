import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class CarritoService {

  private cantidad = new BehaviorSubject<number>(0);

  cantidad$ = this.cantidad.asObservable();

  constructor() {

    this.actualizarCantidad();

  }

  actualizarCantidad() {

    if (typeof window === 'undefined') {

      return;

    }

    const carrito = JSON.parse(

      localStorage.getItem('carrito') || '[]'

    );

    this.cantidad.next(carrito.length);

  }

}