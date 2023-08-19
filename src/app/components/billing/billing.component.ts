import { Component, VERSION, ViewChild, ElementRef } from '@angular/core';
import { ApicallService } from "../../apicall.service";

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
  number:any;
  
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
  inputHandle(event:any) {
    this.number = event.target.value;
    if (this.number.length == 10) {
      this.api.getApi("api/products/barcode/"+this.number).subscribe((response) => {
        console.log(response);
        this.itemname = response.ItemName_Description;
        // this.CategoryDropdownResponse = response.
        this.hsncode = response.HSNCode,
        this.gramweight = response.GrWeight_Grams,
        this.netweight = response.NetWeight_Grams,
        this.ratepergram = response.Rate_Per_Gram,
        this.value = response.ValAdd_RsPs,
        this.stoneRs = response.Stones_RsPs,
        this.discountRs = response.Discount_RsPs,
        this.amountRs = response.Amount_RsPs
      });
    }
  }
  
  submit_billing(){
    let data = {
      CustomerName: this.customername,
      Phone: this.mobileno,
      Aadhar: this.aadharno,
      Pan_Card: this.pangstno,
      StateCode: this.statecode,
      BarCode: this.pbarcode,
      ItemName_Description: this.itemname,
      CategoryName: this.CategoryDropdownResponse,
      HSNCode: this.hsncode,
      GrWeight_Grams: this.gramweight,
      NetWeight_Grams: this.netweight,
      Rate_Per_Gram: this.ratepergram,
      ValAdd_RsPs: this.value,
      Stones_RsPs: this.stoneRs,
      Discount_RsPs: this.discountRs,
      Amount_RsPs: this.amountRs,
    };
    this.api.postApi("api/sales/",data).subscribe((response) => {
      console.log(response);
      console.log("Product Pushed to database");
    });
  }
}
