import { Component } from '@angular/core';
import { ApicallService } from 'src/app/apicall.service';

@Component({
  selector: 'app-scheme',
  templateUrl: './scheme.component.html',
  styleUrls: ['./scheme.component.css']
})
export class SchemeComponent {
  mobileno:any;
  schemeamt:any;
  desc:any;
  schemename:any;
  allschemes:any;
  
  constructor(private api: ApicallService) {}
  
  ngOnInit() {
    this.api.getApi("api/schemes/").subscribe((response) => {
      console.log(response);
      this.allschemes = response;
    });
  }
  add_scheme(mobileno:any){
      let data = {
        SchemeAmount: this.schemeamt,
        SchemeName: this.schemename,
        SchemeDesc: this.desc,
      };
      this.api.postApi("api/schemes/"+mobileno,data).subscribe((response) => {
        console.log(response);
      });
  }
  }
  
