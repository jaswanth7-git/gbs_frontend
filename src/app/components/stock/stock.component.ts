import { Component } from '@angular/core';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.css']
})
export class StockComponent {
  
  value:string | undefined;
  show: any;
  itemchange(id:string) {
    this.value = id;
    if(id=="Create Item"){
      this.show = "show";
    }
    if(id=="Update Item"){
      this.show = "show";
    }
  }
}
