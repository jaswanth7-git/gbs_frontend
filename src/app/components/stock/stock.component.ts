import { Component } from '@angular/core';
import { ApicallService } from "../../apicall.service";
import * as uuid from 'uuid';



declare var bitconverter: any;
@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.css']
})

export class StockComponent {
  
  show: any;
  selectedLevel : any;
  categories : any;
  itemname: any;
  hsncode: any;
  gramweight:any;
  netweight: any;
  ratepergram:any;
  vavalue:any;
  stoneRs:any;
  discountRs:any;
  amountRs: any;
  CategoryDropdownResponse : any;
  SubCategoryDropdownResponse:any;
  barcode:any;
  orchardLike: string = 'nnone';
  huid:any;
  tagnumber:any;
  carat:any;
  vatype:any;
  stonetype:any;
  stonepi :any;
  mcvalue:any;
  wctype:any;
  wcvalue:any;
  tgnumber:any;

  
  constructor(private api: ApicallService) {}
  ngOnInit() {
    this.api.getApi("api/categories/").subscribe((response) => {
      this.categories = response;
    });
  }
 
  getCategoryValue(event:any){
    this.CategoryDropdownResponse = event.target.value;
  }
  getSubCategoryValue(event:any){
    this.SubCategoryDropdownResponse = event.target.value;
  }
  getCaratValue(event:any){
    this.carat = event.target.value;
  }
  getMcValue(event:any){
    this.vatype = event.target.value;
  }
  getWcValue(event:any){
    this.wctype = event.target.value;
  }
  getStoneType(event:any){
    this.stonetype = event.target.value;
  }
  getStone(event:any){
    this.stonepi = event.target.value;
  }
  
  submit_product(){
    let myId = uuid.v4();
    console.log(myId.slice(0,6));
    let data = {
      ItemName_Description: this.itemname,
      HSNCode: this.hsncode+"",
      GrWeight_Grams: this.gramweight+"",
      NetWeight_Grams: this.netweight+"",
      Rate_Per_Gram: this.ratepergram+"",
      Stones_RsPs: this.stoneRs+"",
      Discount_RsPs: this.discountRs+"",
      Amount_RsPs: this.amountRs+"",
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