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
      // this.allschemes = response;
    });
    //  Mocking the values since API not completed yet
    this.allschemes=`[
      {"Date": 1,"Description": "delectus aut autem","Amount": 12345},
      {"Date": 2,"Description": "lorem","Amount": 2393209}
    ]`;
    this.allschemes=JSON.parse(this.allschemes);
    console.log(this.allschemes)
  }
  add_scheme(mobileno:any){
      let data = {
        Amount: this.schemeamt,
        SchemeName: this.schemename,
      };
      this.api.postApi("api/schemes/"+mobileno,data).subscribe((response) => {
        console.log(response);
      });
  }
  }
  
