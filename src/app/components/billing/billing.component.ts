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
  peditBtns:any;
  
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
  getProductDetails(productBarCode:any) {
      this.api.getApi("api/products/barcode/"+productBarCode).subscribe((response) => {
        console.log(response);
        this.itemname = response.ItemName_Description;
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

  add_billing_product(product_bar_code:any){
    if(product_bar_code==undefined || product_bar_code.length<=9){
      document.getElementById("pbarcode-error")!.innerText="The product bar code length should be 10";
    }
    if(product_bar_code.length==10){
      document.getElementById("pbarcode-error")!.innerText="";
      let table: HTMLTableElement = <HTMLTableElement>document.getElementById("billing-tbody");
      let hrow = table.insertRow(0);
      let single_product_details:string[];

      // Ee array lo values api nunchi ostundi for the 7 mandatory values

      single_product_details=["value 1","value 2","value 3","value 4","value 5","value 6","value 7"];
      for(let i=0;i<7;i++){
        let cell = hrow.insertCell(i);
        cell.innerHTML = single_product_details[i];
      }
      hrow.insertCell(7).innerHTML=`<button type="submit" data-pbcode="`+product_bar_code+`" data-bs-toggle="modal" data-bs-target="#productEditModal" class="btn btn-primary pedit-Btns">Edit</button>`;
      let pbarcodeelem=<HTMLInputElement>document.getElementById("pbarcode-inp");
      pbarcodeelem!.value="";
      this.peditBtns=document.querySelectorAll(".pedit-Btns");
      [...this.peditBtns].forEach((peditBtn) => {
        peditBtn.addEventListener('click', () => {
          this.getProductDetails(peditBtn.getAttribute("data-pbcode"));
        });
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
