import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CanActiveGuard implements CanActivate {
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
    if(
      route.queryParams['account'] === 'admin' && 
      route.queryParams['password'] === '1234'
    ) {
      console.log(route);
      console.log(state);
      return true;
    }
    console.log(route);
    console.log(state);
    return false;
  }
  
}
