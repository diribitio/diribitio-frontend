import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate, Router } from '@angular/router';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuard implements CanActivate {
  isLoggedIn = false;
  redirectUrl: 'Projekttage/Anmeldung';

  constructor(private auth: AuthenticationService,
              private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    const url: string = state.url;

    return this.checkLogin(url);
  }

  checkLogin(url: string): boolean {
    if (this.auth.isLoggedIn) { return true; }

    this.router.navigate(['Projekttage/Anmeldung']);
    return false;
  }
}

