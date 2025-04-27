import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '',   
    loadComponent: () =>
      import('./components/home/home.component')
    .then(m=>m.HomeComponent) },   
  {
    path: 'login',
    loadComponent: () =>
      import('./components/login/login.component')
        .then(m => m.LoginComponent)
  },
  {
    path: 'shop',
    loadComponent: () =>
      import('./components/shop/shop.component')
        .then(m => m.ShopComponent)
  },
  { path: '**', redirectTo: '' }
];
