import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import * as moment from 'moment';

import { AuthenticationService } from './auth.service';
import { NotificationService } from '../core/services/notification.service';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {

  constructor(
    private authService: AuthenticationService,
    private notificationService: NotificationService,
    private router: Router,
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const user = this.authService.userValue;

    console.log('foi')

    if (user && user.expiresAt) {

      if (moment() < moment(user.expiresAt)) {
        return true;
      } else {
        this.notificationService.error('Your session has expired');
        this.router.navigate(['/login']);
        return false;
      }
    }

    this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
    return false;
  }
}
