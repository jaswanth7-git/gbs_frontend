import { Component } from '@angular/core';
import { ApicallService } from '../../apicall.service';

@Component({
  selector: 'app-customizedorders',
  templateUrl: './customizedorders.component.html',
  styleUrls: ['./customizedorders.component.css'],
})
export class CustomizedordersComponent {
  show: any;
  itemNameFilter: any;
  deliveryDateFilter: any;
  modelNumberFilter: any;
  itemname: any;
  ddofornament: any;
  weight: any;
  date: any;
  makingcharge: any;
  wastage: any;
  gramrate: any;
  modelnumber: any;
  advances: any;
  customizedorders: any;

  constructor(private api: ApicallService) {}

  ngOnInit() {
    this.api.getApi('api/customized/').subscribe((response) => {
      console.log(typeof response);
      this.customizedorders = response;
    });
  }
  applyFilters(){
    if(this.itemNameFilter){
      this.api.getApi('api/customized/itemName/' + this.itemNameFilter).subscribe((response) => {
        this.customizedorders = [
          response
        ];
      });
    }
    if(this.modelNumberFilter){
      this.api.getApi('api/customized/' + this.modelNumberFilter).subscribe((response) => {
          this.customizedorders = [
            response
          ];
      });
    }
    if(this.deliveryDateFilter){
      this.api.getApi('api/customized/deliveryDate/' + this.deliveryDateFilter).subscribe((response) => {
        this.customizedorders = response;
        console.log(response);
    });
    }
  }

  addcustomizedorders() {
    let data = {
      OrderedDate:this.date,
      DeliveryDate: this.ddofornament,
      ItemName: this.itemname,
      ModelNumber: this.modelnumber,
      Weight: this.weight,
      Making_Charge: this.makingcharge,
      Wastage: this.wastage,
      Gram_Rate: this.gramrate,
      Advance_Amount: this.advances,
    };
    console.log(data);
    this.api.postApi('api/customized/', data).subscribe((response) => {
      if (response) {
        window.location.reload();
      }
    });
  }
}
