import { Component } from '@angular/core';
import { ApicallService } from '../../apicall.service';
@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css'],
})
export class CustomerComponent {
  customerdetails: any;
  customername: any;
  mobileno: any;
  aadharno: any;
  sviewBtns: any;
  singleSales: any;
  email: any;
  address: any;
  almobileno: any;
  panno: any;
  singleCustomer: any;
  newcustomername: any;
  newaadharno: any;
  newpanno: any;
  newemail: any;
  newaddress: any;
  newmobileno: any;
  newalmobileno: any;
  ecustomerid:any;

  constructor(private api: ApicallService) {}
  ngOnInit() {
    this.api.getApi('api/customer/').subscribe((response) => {
      this.customerdetails = response;
    });
  }

  viewSalesById(customerid: any) {
    this.api.getApi('api/customer/CustID/' + customerid).subscribe((response) => {
        if (response) {
          this.singleCustomer = response;
          this.customername = this.singleCustomer.CustomerName;
          this.aadharno = this.singleCustomer.Aadhar;
          this.panno = this.singleCustomer.Pan_Card;
          this.email = this.singleCustomer.Email;
          this.address = this.singleCustomer.Address;
          this.mobileno = this.singleCustomer.Phone;
          this.almobileno = this.singleCustomer.AlternatePhone;
          this.ecustomerid = customerid;
        }
      });
  }
  editCustomer(customerid:any){
    let data = {
      CustomerName: this.customername,
      Aadhar: this.aadharno,
      Pan_Card: this.panno,
      Email: this.email,
      Address: this.address,
      Phone: this.mobileno,
      AlternatePhone: this.almobileno,
    };
    window.location.reload();
    this.api.putApi('api/customer/'+customerid, data).subscribe((response) => {
      
    });
  }
  addcustomer() {
    let data = {
      CustomerName: this.newcustomername,
      Aadhar: this.newaadharno,
      Pan_Card: this.newpanno,
      Email: this.newemail,
      Address: this.newaddress,
      Phone: this.newpanno,
      AlternatePhone: this.newalmobileno,
    };
    this.api.postApi('api/customer/', data).subscribe((response) => {
      window.location.reload();
    });
  }
}
