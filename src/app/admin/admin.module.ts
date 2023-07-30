import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';



import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { CreateOrderComponent } from './pages/order-management/create-order/create-order.component';
import { HomeComponent } from './pages/home/home.component';


@NgModule({
  declarations: [
    DashboardComponent,
    CreateOrderComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
    
  ]
})
export class AdminModule { }
