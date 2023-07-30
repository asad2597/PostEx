import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//import { AdminComponent } from './admin.component';
import { CreateOrderComponent } from './pages/order-management/create-order/create-order.component';

const routes: Routes = [
  {
    path: 'create-order',
    component: CreateOrderComponent
    //loadChildren: () => import('./pages/order-management/order.module').then(m => m.OrderModule)

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
