import { Component } from '@angular/core';
import  JsBarcode /* , { Options as jsBarcodeOptions } */ from 'jsbarcode';
@Component({
  selector: 'app-barcodegenarator',
  templateUrl: './barcodegenarator.component.html',
  styleUrls: ['./barcodegenarator.component.css']
})
export class BarcodegenaratorComponent {
  barcode:any =  "AJ070701";
  ngOnInit(){
    JsBarcode("#barcode", this.barcode);
  }
}
