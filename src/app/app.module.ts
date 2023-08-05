import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { BarcodegenaratorComponent } from './components/barcodegenarator/barcodegenarator.component';
import { routes } from './app.router';
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    BarcodegenaratorComponent
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
