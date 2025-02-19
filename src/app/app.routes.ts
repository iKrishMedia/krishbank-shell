import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: 'payments',
    loadComponent: () =>
      import('mfe-payments/remoteEntry').then((m) => m.PaymentsComponent),
  },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
];
