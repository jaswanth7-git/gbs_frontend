import {Routes,RouterModule} from '@angular/router';
import { BarcodegenaratorComponent } from './components/barcodegenarator/barcodegenarator.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import {StockComponent} from './components/stock/stock.component';
import {LoginComponent} from './components/login/login.component'
import { NavbarComponent } from './navbar/navbar.component';
export const router: Routes=[
    {path:'',component:LoginComponent},
    {path : 'dashboard',component : DashboardComponent},
    {path : 'barcodegen' ,component : BarcodegenaratorComponent},
    {path: 'stock',component:StockComponent},
];
export const routes = RouterModule.forRoot(router);