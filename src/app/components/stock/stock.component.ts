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
  mctype:any;
  stonetype:any;
  stonepi :any;
  mcvalue:any;
  wctype:any;
  wcvalue:any;
  tgnumber:any;
  mgamount:any;
  wdamount:any;
  stoneamount:any;
  isVisible!: boolean | false;
  stonepieces:any;

  
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
    if(this.carat =="24K"){
      this.ratepergram = localStorage.getItem("24K");
    }
    else if(this.carat == "22K"){
      this.ratepergram = localStorage.getItem("22K");
    }
    else if(this.carat == "18K"){
      this.ratepergram = localStorage.getItem("18K");
    }
    else{
      this.ratepergram = localStorage.getItem("Silver");
    }
  }
  getMcValue(event:any){
    this.mctype = event.target.value;
    this.mgcalculate();
  }
  getWcValue(event:any){
    this.wctype = event.target.value;
    this.wdcalculate();
  }
  getStoneType(event:any){
    this.stonetype = event.target.value;
  }
  getStone(event:any){
    this.stonepi = event.target.value;
    if(this.stonepi == "pieces"){
      this.isVisible = true;
    }
    else{
      this.isVisible = false;
    }
  }
  mgcalculate(){
    if(this.mctype =="percentage" ){
      this.mgamount = (this.netweight*this.ratepergram*this.mcvalue)/100;
    }
    else{
      this.mgamount = parseInt(this.mcvalue);
    }
    if(this.wdamount == undefined){
      this.vavalue = this.mgamount;
      this.amountRs = this.netweight*this.ratepergram+this.mgamount;
    }
    else{
      this.vavalue = this.mgamount+this.wdamount;
      this.amountRs = this.netweight*this.ratepergram+this.mgamount+this.wdamount;
    }
    this.amountRs = this.amountRs.toFixed(4);
  }

  wdcalculate(){
    if(this.wctype =="percentage" ){
      this.wdamount = (this.netweight*this.ratepergram*this.wcvalue)/100;
    }
    else{
      this.wdamount = parseInt(this.wcvalue);
    }
    if(this.mgamount == undefined){
      this.vavalue = this.wdamount;
      this.amountRs = this.netweight*this.ratepergram+this.wdamount;
    }
    else{
      this.vavalue = this.mgamount+this.wdamount;
      this.amountRs = this.netweight*this.ratepergram+this.mgamount+this.wdamount;
    }
    this.amountRs = this.amountRs.toFixed(4);
  }
  stonecalculate(){
    if(this.stonepi == "pieces"){
      this.stoneamount = this.stoneRs*this.stonepieces;
    }
    else{
      this.stoneamount = parseInt(this.stoneRs);
    }
    if(this.mgamount == undefined && this.wdamount == undefined){
      this.amountRs = this.netweight*this.ratepergram+this.stoneamount;
    }
    else if(this.mgamount == undefined){
      this.amountRs = this.netweight*this.ratepergram+this.wdamount+this.stoneamount;
    }
    else if(this.wdamount == undefined){
      this.amountRs = this.netweight*this.ratepergram+this.mgamount+this.stoneamount;
    }
    else{
      this.amountRs = this.netweight*this.ratepergram+this.mgamount+this.wdamount+this.stoneamount;
    }
    this.amountRs = this.amountRs.toFixed(4);
    
  }
  calculate(){
    this.amountRs = this.netweight*this.ratepergram;
    this.amountRs = this.amountRs.toFixed(4);
  }
  submit_product(){
    let myId = uuid.v4();
    console.log(myId.slice(0,6));
    let data = {
      ItemName_Description: this.itemname+"",
      HSNCode: this.hsncode+"",
      HUID: this.huid+"",
      TagName: this.tgnumber+"",
      BarCode_Prefix: this.barcode+"",
      GrWeight_Grams: this.gramweight+"",
      NetWeight_Grams: this.netweight+"",
      Rate_Per_Gram: this.ratepergram+"",
      Making_Charge: this.mcvalue+"",
      Making_Direct: this.mctype+"",
      Wastage_Charge: this.wctype+"",
      Wastage_Direct: this.wcvalue+"",
      V_A: this.vavalue+"",
      Stone_Type: this.stonetype+"",
      Stone_Pieces_CTS: this.stonepieces+"",
      Stones_RsPs: this.stoneRs+"",
      Discount_RsPs: "0",
      Amount_RsPs: this.amountRs+"",
      BarCode: this.barcode+myId.slice(0,8),
      Branch: "Dubai",
      //Branch: localStorage.setItem("branch");
    };
    this.api.postApi("api/products/"+this.CategoryDropdownResponse+"/"+this.SubCategoryDropdownResponse,data).subscribe((response) => {
      console.log("Product Pushed to database");
    });
  }
  
}