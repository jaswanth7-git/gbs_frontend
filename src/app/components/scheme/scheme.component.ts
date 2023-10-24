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
      this.allschemes = response;
    });
  }
  add_scheme(){
      let data = {
        SchemeAmount: this.schemeamt,
        MobileNumber: this.mobileno+"",
        SchemeName: this.schemename,
        SchemeDesc: this.desc,
      };
      this.api.postApi("api/schemes/",data).subscribe((response) => {
        console.log(response);
        window.location.reload();
      });
  }
  }
  
