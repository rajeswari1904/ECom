import { Routes } from '@angular/router';

export const appRoutes: Routes = [
  {
    path: '',
    loadComponent: () => import('./features/home/home.page').then((m) => m.HomePage),
  },
  {
    path: 'products',
    loadComponent: () => import('./features/products/products.page').then((m) => m.ProductsPage),
  },
  {
    path: 'products/:id',
    loadComponent: () => import('./features/products/product-details.page').then((m) => m.ProductDetailsPage),
  },
  {
    path: 'login',
    loadComponent: () => import('./auth/login/login.page').then((m) => m.LoginPage),
  },
  {
    path: 'register',
    loadComponent: () => import('./auth/register/register.page').then((m) => m.RegisterPage),
  },
  {
    path: 'cart',
    loadComponent: () => import('./features/cart/cart.page').then((m) => m.CartPage),
  },
  {
    path: 'checkout',
    loadComponent: () => import('./features/checkout/checkout.page').then((m) => m.CheckoutPage),
  },
  {
    path: 'admin',
    loadComponent: () => import('./features/admin/admin.page').then((m) => m.AdminPage),
  },
  {
    path: 'seller',
    loadComponent: () => import('./features/seller/seller.page').then((m) => m.SellerPage),
  },
  {
    path: 'customer',
    loadComponent: () => import('./features/customer/customer.page').then((m) => m.CustomerPage),
  },
  {
    path: '**',
    redirectTo: '',
  },
];
