import { Component } from '@angular/core';
import { ApicallService } from "../../apicall.service";

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent {

  products: any;
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
  mctype:any;
  mgamount:any;
  wdamount:any;
  vaamout:any;
  stoneamount:any;
  isVisible!: boolean | false;
  stonepieces:any;
  SubCategoryDropdownResponse: any;
  carat: any;
  wctype: any;
  stonetype: any;
  stonepi: any;
  mcvalue: any;
  vavalue: any;
  wcvalue: any;
  huid:any;
  tagname: any;
  logvalu:any;
  




  constructor(private api: ApicallService) {}

  ngOnInit() {
    this.api.getApi("api/products/").subscribe((response) => {
      this.products = response;
      console.log(this.products);
    });
  }
  seeSingleProduct(product_bar_code:any){

    this.api.getApi("api/products/"+product_bar_code).subscribe((response) => {
      this.logvalu=response.ItemName_Description;;
      this.itemname = response.ItemName_Description;
      this.hsncode = response.HSNCode,
      this.gramweight = response.GrWeight_Grams,
      this.netweight = response.NetWeight_Grams,
      this.vavalue = response.ValAdd_RsPs,
      this.tagname = response.TagName,
      this.mcvalue = response.Making_Direct,
      this.huid = response.HUID,
      this.wcvalue = response.Wastage_Direct,
      this.stoneRs = response.Stones_RsPs,
      this.discountRs = response.Discount_RsPs,
      this.amountRs = response.Amount_RsPs
    });

    
  }

  deleteProduct(hsncode:any){
    // console.log("LOGGER");
    // console.log(hsncode);
    // this.api.delete("api/delete/:"+hsncode+"/:"+huid).subscribe(() => {
    //   this.fetchItems(); 
    // })
    
  }
  fetchItems() {
    throw new Error('Method not implemented.');
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
    if(this.discountRs == undefined){
      this.amountRs = this.netweight*this.ratepergram;
    }
    else{
      this.amountRs = this.netweight*this.ratepergram-this.discountRs;
    }
    this.amountRs = this.amountRs.toFixed(4);
  }
}



// hrow.insertCell(9).innerHTML=`<button type="submit" " data-bs-toggle="modal" data-bs-target="#productEditModal" class="btn btn-primary pedit-Btns">Edit</button>`;
