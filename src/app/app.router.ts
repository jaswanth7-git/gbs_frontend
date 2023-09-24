import {Routes,RouterModule} from '@angular/router';
import { BarcodegenaratorComponent } from './components/barcodegenarator/barcodegenarator.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import {StockComponent} from './components/stock/stock.component';
import {LoginComponent} from './components/login/login.component'
import { NavbarComponent } from './navbar/navbar.component';
import { BillingComponent } from './components/billing/billing.component';
import { SalesComponent } from './components/sales/sales.component';
import { ProductlistComponent } from './components/productlist/productlist.component';
import { CustomizedordersComponent } from './components/customizedorders/customizedorders.component';
import { AdvanceComponent } from './components/advance/advance.component';

export const router: Routes=[
    {path:'',component:LoginComponent},
    {path : 'dashboard',component : DashboardComponent},
    {path : 'barcodegen' ,component : BarcodegenaratorComponent},
    {path: 'stock',component:StockComponent},
    {path: 'billing',component:BillingComponent},
    {path:'navbar',component: NavbarComponent},
    {path:'sales',component: SalesComponent},
    {path: 'productlist',component:ProductlistComponent },
    {path: 'customizedorders',component:CustomizedordersComponent},
    {path: 'advance',component:AdvanceComponent}
];
export const routes = RouterModule.forRoot(router);