import {Routes,RouterModule} from '@angular/router';
import { BarcodegenaratorComponent } from './components/barcodegenarator/barcodegenarator.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import {StockComponent} from './components/stock/stock.component';
import {LoginComponent} from './components/login/login.component'
import { NavbarComponent } from './navbar/navbar.component';
import { BillingComponent } from './components/billing/billing.component';
import { SalesComponent } from './components/sales/sales.component';
import { ProductlistComponent } from './components/productlist/productlist.component';
export const router: Routes=[
    {path:'',component:LoginComponent},
    {path : 'dashboard',component : DashboardComponent},
    {path : 'barcodegen' ,component : BarcodegenaratorComponent},
    {path: 'stock',component:StockComponent},
    {path: 'billing',component:BillingComponent},
    {path:'navbar',component: NavbarComponent},
    {path:'sales',component: SalesComponent},
    {path: 'productlist',component:ProductlistComponent }
];
export const routes = RouterModule.forRoot(router);