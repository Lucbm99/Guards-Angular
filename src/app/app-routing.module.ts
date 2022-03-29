import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//components pages
import { HomeComponent } from './shared/pages/home/home.component';
import { AccountComponent } from './shared/pages/account/account.component';

//guards
import { CanActiveGuard } from './shared/guards/can-active.guard';
import { CanDeactivateGuard } from './shared/guards/can-deactivate.guard';
import { CanLoadGuard } from './shared/guards/can-load.guard';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  }, 
  {
    path: 'account',
    component: AccountComponent,
    canActivate: [CanActiveGuard],
    canDeactivate: [CanDeactivateGuard]
  },
  {
    path: 'core',
    loadChildren: () => import('./core/core.module').then((m) => m.CoreModule),
    canLoad: [CanLoadGuard]
  }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
