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
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    BarcodegenaratorComponent,
    StockComponent,
    LoginComponent,
    NavbarComponent
  ],  
  imports: [
    BrowserModule,
    AppRoutingModule,
    routes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
