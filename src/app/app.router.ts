import {Routes,RouterModule} from '@angular/router';
import { BarcodegenaratorComponent } from './components/barcodegenarator/barcodegenarator.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
export const router: Routes=[
    {path : '',component : DashboardComponent},
    {path : 'barcodegen' ,component : BarcodegenaratorComponent}
];
export const routes = RouterModule.forRoot(router);