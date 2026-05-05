import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home';
import { ProductosComponent } from './pages/productos/productos';
import { CarritoComponent } from './pages/carrito/carrito';
import { LoginComponent } from './pages/login/login';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'productos', component: ProductosComponent },
  { path: 'carrito', component: CarritoComponent },
  { path: 'login', component: LoginComponent }
];