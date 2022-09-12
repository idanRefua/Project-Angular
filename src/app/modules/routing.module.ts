import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AngularFireAuthGuard } from '@angular/fire/compat/auth-guard';
import {
  AngularFireAuthGuardModule,
  redirectLoggedInTo,
  redirectUnauthorizedTo,
} from '@angular/fire/compat/auth-guard';
import { CustomerPageComponent } from '../pages/customer-page/customer-page.component';
import { LoginPageComponent } from '../pages/login-page/login-page.component';
import { ContactsPageComponent } from '../pages/contacts-page/contacts-page.component';
import { AboutPageComponent } from '../pages/about-page/about-page.component';

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['login']);
const redirectLoggedInToCustomers = () => redirectLoggedInTo(['customers']);

@NgModule({
  imports: [
    AngularFireAuthGuardModule,

    RouterModule.forRoot([
      {
        path: 'customers',
        component: CustomerPageComponent,
        canActivate: [AngularFireAuthGuard],
        data: { authGuardPipe: redirectUnauthorizedToLogin },
      },

      {
        path: 'contacts',
        component: ContactsPageComponent,
        canActivate: [AngularFireAuthGuard],
        data: { authGuardPipe: redirectUnauthorizedToLogin },
      },

      {
        path: 'login',
        component: LoginPageComponent,
        canActivate: [AngularFireAuthGuard],
        data: { authGuardPipe: redirectLoggedInToCustomers },
      },
      {
        path: 'about',
        component: AboutPageComponent,
      },

      {
        path: '**',
        redirectTo: 'login',
      },
    ]),
  ],
  exports: [RouterModule],
})
export class RoutingModule {}
