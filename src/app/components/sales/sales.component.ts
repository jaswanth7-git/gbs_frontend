import { Component } from '@angular/core';
import { ApicallService } from "../../apicall.service";

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.css']
})

export class SalesComponent {
  salesdetails:any;
  customername:any;
  mobileno:any;
  aadharno:any;
  itemname: any;
  hsncode: any;
  gramweight:any;
  netweight: any;
  ratepergram:any;
  value:any;
  stoneRs:any;
  discountRs:any;
  amountRs: any;
  carat_type:any;
  category_name:any;
  sub_category:any;
  huid:any;
  tagnumber:any;
  wcvalue:any;
  vavalue:any;
  stonepieces:any;
  mcvalue:any;
  stonetype:any;
  sviewBtns:any;
  singleSales:any;
  panno:any;

  constructor(private api: ApicallService) {}
  ngOnInit() {
    
    // To get all sales api should be created

    // this.api.getApi("api/sales/").subscribe((response) => {
    //   this.salesdetails = response;
    // });

    this.salesdetails=`[
      {"SalesID": 1,"CustomerName": "delectus aut autem","Phone": 12345},
      {"SalesID": 2,"CustomerName": "lorem","Phone": 2393209}
    ]`;

    this.salesdetails=JSON.parse(this.salesdetails);
    document.addEventListener("DOMContentLoaded", (event) => {
    this.viewSalesById();
    });
  }

  viewSalesById(){
    this.sviewBtns=document.querySelectorAll(".sview-Btns");
    [...this.sviewBtns].forEach((peditBtn) => {
      peditBtn.addEventListener('click', () => {
        console.log(peditBtn.getAttribute("data-salesid"));

      // To get single sales based on sales id, api should be created

      // this.api.getApi(`api/sales/${peditBtn.getAttribute("data-salesid")}`).subscribe((response) => {
      // this.singleSales = response;
      // });

      this.singleSales=`
        {"SalesID": ${peditBtn.getAttribute("data-salesid")},"CustomerName": "delectus aut autem","Phone": 12345, "Pan_Card": "1234"}
      `;
      this.singleSales=JSON.parse(this.singleSales);

      this.customername=this.singleSales.CustomerName;
      this.mobileno=this.singleSales.Phone;
      // this.aadharno=this.singleSales.AadharNumber; Missing in sales table
      // this.carat_type=this.singleSales.CaratType; Missing in sales table
      this.category_name=this.singleSales.CategoryName;
      // this.sub_category=this.singleSales.CustomerName; Missing in sales table
      this.itemname=this.singleSales.ItemName_Description;
      // this.huid=this.singleSales.CustomerName; Missing in sales table
      this.hsncode=this.singleSales.HSNCode;
      // this.tagnumber=this.singleSales.CustomerName; Missing in sales table
      this.gramweight=this.singleSales.GrWeight_Grams;
      this.netweight=this.singleSales.NetWeight_Grams;
      this.ratepergram=this.singleSales.Rate_Per_Gram;
      this.panno=this.singleSales.Pan_Card;
      // this.mcvalue=this.singleSales.CustomerName; Missing in sales table
      // this.wcvalue=this.singleSales.CustomerName; Missing in sales table
      this.vavalue=this.singleSales.ValAdd_RsPs;
      // this.stonetype=this.singleSales.CustomerName; Missing in sales table
      // this.stonepieces=this.singleSales.CustomerName; Missing in sales table
      this.stoneRs=this.singleSales.Stones_RsPs;
      this.discountRs=this.singleSales.Discount_RsPs;
      this.amountRs=this.singleSales.Amount_RsPs;
      });
    });
}
  
}
