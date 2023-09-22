import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { OrderComponent } from './order/order.component';
import { DetailProductComponent } from './detail-product/detail-product.component';
import { OrderConfirmComponent } from './order-confirm/order-confirm.component';

@NgModule({
  declarations: [

    HomeComponent,
    HeaderComponent,
    FooterComponent,
    OrderComponent,
    DetailProductComponent,
    OrderConfirmComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [
    // HomeComponent,
    // DetailProductComponent,
    // OrderComponent,
    OrderConfirmComponent
  ]
})
export class AppModule { }
