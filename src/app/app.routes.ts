import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { loadRemoteModule } from '@angular-architects/native-federation';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: 'payments',
    loadComponent: () =>
      loadRemoteModule('mfe-payments', './PaymentsComponent').then(
        (m) => m.PaymentsComponent
      ),
    // import('mfe-payments/PaymentsComponent').then((m) => m.PaymentsComponent),
    // loadRemoteModule('mfe-payments', './PaymentsComponent'),
  },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
];
