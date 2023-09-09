import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

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
