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
  this.api.getApi("api/sales/").subscribe((response) => {
    // this.alladvances = response;
  });
  //  Mocking the values since API not completed yet
  this.alladvances=`[
    {"Date": 1,"Description": "delectus aut autem","Amount": 12345},
    {"Date": 2,"Description": "lorem","Amount": 2393209}
  ]`;
  this.alladvances=JSON.parse(this.alladvances);
  console.log(this.alladvances)
}
add_advance(mobileno:any){
    let data = {
      Amount: this.advanceamt
    };
    this.api.postApi("api/sales/"+mobileno,data).subscribe((response) => {
      console.log(response);
      console.log("Advance Added to database");
    });
}
}
