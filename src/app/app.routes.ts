import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Productos } from './pages/productos/productos';
import { CarritoComponent } from './pages/carrito/carrito';
import { Login } from './pages/login/login';
import { Register } from './pages/register/register';
import { AdminComponent } from './pages/admin/admin';

export const routes: Routes = [

  {path: '',component: Home},
  {path: 'productos', component: Productos},
  {path: 'carrito', component: CarritoComponent},
  {path: 'login', component: Login},
  { path: 'register', component: Register},
  { path: 'admin', component: AdminComponent }
];