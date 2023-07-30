import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminComponent } from './admin/admin.component';
import { HomeComponent } from './admin/pages/home/home.component';
import { DashboardComponent } from './admin/pages/dashboard/dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: 'order-management',
        loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
        //component: CreateOrderComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
