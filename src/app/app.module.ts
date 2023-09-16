import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { BarcodegenaratorComponent } from './components/barcodegenarator/barcodegenarator.component';
import { routes } from './app.router';
import { StockComponent } from './components/stock/stock.component';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BillingComponent } from './components/billing/billing.component';
import { SalesComponent } from './components/sales/sales.component';
import { ProductlistComponent } from './components/productlist/productlist.component';
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    BarcodegenaratorComponent,
    StockComponent,
    LoginComponent,
    NavbarComponent,
    BillingComponent,
    SalesComponent,
    ProductlistComponent
  ],  
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    routes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
