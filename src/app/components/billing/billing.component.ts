import { Component } from '@angular/core';
import { ApicallService } from "../../apicall.service";
import * as uuid from 'uuid';

declare var bitconverter: any;
@Component({
  selector: 'app-billing',
  templateUrl: './billing.component.html',
  styleUrls: ['./billing.component.css']
})
export class BillingComponent {
  show: any;
  selectedLevel : any;
  categories : any;
  itemname: any;
  hsncode: any;
  gramweight:any;
  netweight: any;
  ratepergram:any;
  value:any;
  stoneRs:any;
  discountRs:any;
  amountRs: any;
  CategoryDropdownResponse : any;
  barcode:any;
  orchardLike: string = 'nnone';
  customername:any;
  mobileno:any;
  aadharno:any;
  pangstno:any;
  statecode:any;
  pbarcode:any;

  
  constructor(private api: ApicallService) {}
  ngOnInit() {
    this.api.getApi("api/categories/").subscribe((response) => {
      this.categories = response;
    });
  }
 
  getSelectedValue(event:any){
    this.CategoryDropdownResponse = event.target.value;
    this.barcode = this.CategoryDropdownResponse.slice(0,2);
  }
  
  submit_product(){
    let myId = uuid.v4();
    console.log(myId.slice(0,6));
    let data = {
      ItemName_Description: this.itemname,
      HSNCode: this.hsncode+"",
      GrWeight_Grams: this.gramweight,
      NetWeight_Grams: this.netweight,
      Rate_Per_Gram: this.ratepergram,
      ValAdd_RsPs: this.value,
      Stones_RsPs: this.stoneRs,
      Discount_RsPs: this.discountRs,
      Amount_RsPs: this.amountRs,
      BarCode_path: "Pathuuuu",
      BarCode: this.barcode+myId.slice(0,8),
      Branch: "Delhi",
      
    };
    this.api.postApi("api/products/"+this.CategoryDropdownResponse,data).subscribe((response) => {
      console.log(response);
      console.log("Product Pushed to database");
    });
  }
}
