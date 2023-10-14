import { Component } from '@angular/core';
import { ApicallService } from 'src/app/apicall.service';

@Component({
  selector: 'app-advance',
  templateUrl: './advance.component.html',
  styleUrls: ['./advance.component.css']
})
export class AdvanceComponent {
mobileno:any;
advanceamt:any;
desc:any;
alladvances:any;

constructor(private api: ApicallService) {}

ngOnInit() {
  this.api.getApi("api/advance/").subscribe((response) => {
    this.alladvances = response;
  });
}
add_advance(mobileno:any){
    let data = {
      Amount: this.advanceamt
    };
    this.api.postApi("api/advance/"+mobileno,data).subscribe((response) => {
      
    });
}
}
