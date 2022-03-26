import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//components pages
import { HomeComponent } from './shared/home/home.component';
import { AccountComponent } from './shared/account/account.component';

//guards
import { CanActiveGuard } from './shared/guards/can-active.guard';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  }, 
  {
    path: 'account',
    component: AccountComponent,
    canActivate: [CanActiveGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
