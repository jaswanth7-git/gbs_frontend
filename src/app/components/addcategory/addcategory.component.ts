import { Component } from '@angular/core';
import { ApicallService } from 'src/app/apicall.service';

@Component({
  selector: 'app-addcategory',
  templateUrl: './addcategory.component.html',
  styleUrls: ['./addcategory.component.css']
})
export class AddcategoryComponent {

  constructor(private api: ApicallService){}
  carattype:any;
  categoryname:any;
  subcategoryname:any;
  quantity:any;
  categories:any;

  ngOnInit(){

    this.api.getApi("api/categories/").subscribe((response) => {
      // console.log(response);
      // console.log("Category Added");
      this.categories = response;
      
    });
  }

  addcategory(){

    let data = {

      CaratType: this.carattype,
      CategoryName: this.categoryname,
      SubCategoryName: this.subcategoryname,
      Quantity: this.quantity,
      Branch: "Dubai"
    }
    
    this.api.postApi("api/categories/",data).subscribe((response) => {
      // console.log(response);
      console.log("Category Added");
    });

  }

}
