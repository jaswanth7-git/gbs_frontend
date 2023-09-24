import { Component} from '@angular/core';
import { ApicallService } from "../../apicall.service";

@Component({
  selector: 'app-customizedorders',
  templateUrl: './customizedorders.component.html',
  styleUrls: ['./customizedorders.component.css']
})


export class CustomizedordersComponent {

  show:any;
  itemNameFilter:any;
  deliveryDateFilter:any;
  modelNumberFilter:any;
  itemname:any;
  ddofornament:any;
  weight:any;
  date:any;
  makingcharge:any;
  wastage:any;
  gramrate:any;
  modelnumber: any;
  advances:any;
  

  constructor(private api: ApicallService) {}

  applyFilters(itemNameFilter:any,deliveryDateFilter:any,modelNumberFilter:any){

    this.api.getApi("api/customizedOrders").subscribe((response)=> {


    });

      
  }

  addcustomizedorders(){

    this.api.getApi("api/customizedOrders/").subscribe((response)=> {
      console.log(response);
      
    });

  }



}
  

  


