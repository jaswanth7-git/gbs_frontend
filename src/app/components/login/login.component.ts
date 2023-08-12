import { Component } from '@angular/core';
import { ApicallService } from "../../apicall.service";
import {Router} from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  user_name:any;
  password:any;
  branch:any;
  role:any;
  constructor(private api: ApicallService, private router: Router) {}
  getBranch(event:any){
    this.branch = event.target.value;
    this.branch+"";
  }
  login_details(){
    let data = {
      userName : this.user_name,
      password : this.password
    };
    this.api.postApi("api/user/"+this.branch,data).subscribe((response) => {
      this.role = response.Role;
      if(this.role=='admin'){
        this.router.navigate(['./stock']);
      }
      else{
        this.router.navigate(['./']);
      }
    });
  }
}

