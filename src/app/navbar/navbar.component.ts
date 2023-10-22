import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  twentyfourKarat:any;
  twentytwoKarat:any;
  eighteenKarat:any;
  silver:any;
  savegoldprice(){
    localStorage.setItem("24K",this.twentyfourKarat);
    localStorage.setItem("22K",this.twentytwoKarat);
    localStorage.setItem("18K",this.eighteenKarat);
    localStorage.setItem("Silver",this.silver);
    window.location.reload();
  }
  ngOnInit(){
    document.addEventListener("DOMContentLoaded", (event) => {
      this.twentyfourKarat = localStorage.getItem("24K");
      this.twentytwoKarat = localStorage.getItem("22K");
      this.eighteenKarat = localStorage.getItem("18K");
      this.silver = localStorage.getItem("Silver");
    });
  }
  
}
document.addEventListener("DOMContentLoaded", (event) => {
  let sidebar = document.querySelector(".sidebar");
  let sidebarBtn = document.querySelector(".sidebarBtn");
    if(sidebarBtn!=null && sidebar!=null){
      sidebarBtn.addEventListener('click', (event)=> {
        sidebar!.classList.toggle("active");
        if(sidebar!.classList.contains("active")){
        sidebarBtn!.classList.replace("bx-menu" ,"bx-menu-alt-right");
       }else{
        sidebarBtn!.classList.replace("bx-menu-alt-right", "bx-menu");
       }
       });
    }
  });


