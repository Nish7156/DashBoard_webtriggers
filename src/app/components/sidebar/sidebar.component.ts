import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginComponent } from 'src/app/pages/login/login.component';
import { AuthService } from 'src/app/services/auth.service';

declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/dashboard/:id', title: 'Dashboard',  icon: 'ni-tv-2 text-primary', class: '' },
    //{ path: '/icons', title: 'Icons',  icon:'ni-planet text-blue', class: '' },
    //{ path: '/maps', title: 'Maps',  icon:'ni-pin-3 text-orange', class: '' },
    { path: '/user-profile/:id', title: 'User profile',  icon:'ni-single-02 text-yellow', class: '' },
    { path: '/tables/:id', title: 'Tables',  icon:'ni-bullet-list-67 text-red', class: '' },
   // { path: '/login', title: 'Login',  icon:'ni-key-25 text-info', class: '' },
    //{ path: '/register', title: 'Register',  icon:'ni-circle-08 text-pink', class: '' },
    { path: '/fullregister/:id', title: 'User Info Register',  icon:'ni-circle-08 text-pink', class: '' },
    { path: '/setting', title: 'Setting',  icon:'ni-settings-gear-65 text-info', class: '' },
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  public menuItems: any[];
  public isCollapsed = true;
  userdata:any;

  constructor(private router: Router,public servicess:LoginComponent, public authservice:AuthService) { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
    this.router.events.subscribe((event) => {
      this.isCollapsed = true;
   });

   this.authservice.getUserData().subscribe(data=>{
      this.userdata=data.image;
      console.log(this.userdata,"userdata-img");
    }
    );
  }


  bar(){
    this.servicess.onSubmit(this.servicess.login);
    console.log(this.servicess.login,'sidebar');
    
  }
}
