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
  tagnumber: any;
  logvalu:any;
  categoryname:any;
  subcategoryname:any;
  ngDropdown:any;
  existingadvances:any;
  valid_advances : number[] = [];
  advance_flag!:boolean | false;
  constructor(private api: ApicallService) {}
  ngOnInit() {
    this.api.getApi("api/categories/").subscribe((response) => {
      this.categories = response;
    });
  }
  getProductDetails(productBarCode:any) {
    this.api.getApi("api/advance/9912029080").subscribe((response)=>{
      this.existingadvances = response;
      for(let x=0 ; x < this.existingadvances.length ; x++){
        if(Number(this.existingadvances[x].Amount) <=Number( this.amountRs)){
          this.valid_advances.push(this.existingadvances[x].Amount)
        }
      }
    })
      this.api.getApi("api/products/"+productBarCode).subscribe((response) => {
        this.carat = response.CaratType+"K";
        this.categoryname = response.CategoryID;
        this.subcategoryname = response.CategoryID;
        this.logvalu=response.ItemName_Description;;
        this.itemname = response.ItemName_Description;
        this.huid = response.HUID;
        this.hsncode = response.HSNCode,
        this.tagnumber = response.TagName,
        this.gramweight = response.GrWeight_Grams,
        this.netweight = response.NetWeight_Grams,
        this.ratepergram = response.Rate_Per_Gram,
        this.mctype = response.Making_Direct,
        this.mcvalue = response.Making_Charge,
        this.wctype = response.Wastage_Charge,
        this.wcvalue = response.Wastage_Direct,
        this.vavalue = response.V_A,
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
      let single_product_details:any[];
      this.api.getApi("api/products/"+product_bar_code).subscribe((response) => {
        this.logvalu=response.ItemName_Description;;
        this.itemname = response.ItemName_Description;
        this.hsncode = response.HSNCode,
        this.gramweight = response.GrWeight_Grams,
        this.netweight = response.NetWeight_Grams,
        this.ratepergram = response.Rate_Per_Gram,
        this.vavalue = response.V_A,
        this.stonetype = response.Stone_Type,
        this.stoneRs = response.Stones_RsPs,
        this.stonepi = response.Stone_Pieces_CTS,
        this.discountRs = response.Discount_RsPs,
        this.amountRs = response.Amount_RsPs
        if(this.stonepi=="pieces"){
          this.isVisible = true;
          this.stonepieces = response.Stone_Pieces;
        }
        single_product_details=[this.logvalu,this.hsncode,this.gramweight,this.netweight,this.ratepergram,this.vavalue,this.stoneRs,this.discountRs,this.amountRs];
        for(let i=0;i<9;i++){
          let cell = hrow.insertCell(i);
          cell.innerHTML = single_product_details[i];
          console.log(single_product_details[i]);
        }
        hrow.insertCell(9).innerHTML=`<button type="submit" data-pbcode="`+product_bar_code+`" data-bs-toggle="modal" data-bs-target="#productEditModal" class="btn btn-primary pedit-Btns">Edit</button>`;
        let pbarcodeelem=<HTMLInputElement>document.getElementById("pbarcode-inp");
        pbarcodeelem!.value="";
        this.peditBtns=document.querySelectorAll(".pedit-Btns");
        [...this.peditBtns].forEach((peditBtn) => {
          peditBtn.addEventListener('click', () => {
            this.getProductDetails(peditBtn.getAttribute("data-pbcode"));
          });
        });
      });
    }

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
    if(this.discountRs == undefined){
      this.amountRs = this.netweight*this.ratepergram;
    }
    else{
      this.amountRs = this.netweight*this.ratepergram-this.discountRs;
    }
    this.amountRs = this.amountRs.toFixed(4);
  }
  submit_product(){
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
      BarCode: this.barcode,
      Branch: "Delhi",

    };
    this.api.postApi("api/products/"+this.CategoryDropdownResponse,data).subscribe((response) => {
    });
  }
}
function get_details() {
  throw new Error('Function not implemented.');
}

