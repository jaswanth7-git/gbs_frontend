import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  
}
document.addEventListener("DOMContentLoaded", (event) => {
  let sidebar = document.querySelector(".sidebar");
  let sidebarBtn = document.querySelector(".sidebarBtn");
    sidebarBtn!.addEventListener('click', (event)=> {
      sidebar!.classList.toggle("active");
      if(sidebar!.classList.contains("active")){
      sidebarBtn!.classList.replace("bx-menu" ,"bx-menu-alt-right");
     }else
      sidebarBtn!.classList.replace("bx-menu-alt-right", "bx-menu");
     });
  });
