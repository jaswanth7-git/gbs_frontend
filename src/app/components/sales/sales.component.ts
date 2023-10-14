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

    this.api.getApi('api/sales/').subscribe((response) => {
      this.salesdetails = response;
    });

    // this.salesdetails=`[
    //   {"SalesID": 1,"CustomerName": "delectus aut autem","Phone": 12345},
    //   {"SalesID": 2,"CustomerName": "lorem","Phone": 2393209}
    // ]`;
  }

  viewSalesById(salesId:any){
    this.api.getApi(`api/sales/SalesID/`+salesId).subscribe((response) => {
      if(response){
        this.singleSales = response;
        this.customername = this.singleSales.CustomerName;
        this.mobileno = this.singleSales.Phone;
        this.aadharno=this.singleSales.Aadhar;
        this.carat_type=this.singleSales.CaratType; 
        this.category_name = this.singleSales.CategoryName;
        this.sub_category=this.singleSales.SubCategoryName; 
        this.itemname = this.singleSales.ItemName_Description;
        this.huid=this.singleSales.HUID; 
        this.hsncode = this.singleSales.HSNCode;
        this.tagnumber=this.singleSales.Tagname;
        this.gramweight = this.singleSales.GrWeight_Grams;
        this.netweight = this.singleSales.NetWeight_Grams;
        this.ratepergram = this.singleSales.Rate_Per_Gram;
        this.panno = this.singleSales.Pan_Card;
        this.mcvalue=this.singleSales.Making_Charge; 
        this.wcvalue=this.singleSales.Wastage_Charge; 
        this.vavalue = this.singleSales.V_A;
        this.stonetype=this.singleSales.Stone_Type; 
        this.stonepieces=this.singleSales.Stones_RsPs; 
        this.stoneRs = this.singleSales.Stones_RsPs;
        this.discountRs = this.singleSales.Discount_RsPs;
        this.amountRs = this.singleSales.Amount_RsPs;
      }
      
    });
  }
}
