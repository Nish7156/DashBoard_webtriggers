import { Component, OnInit, ElementRef } from '@angular/core';
import { ROUTES } from '../sidebar/sidebar.component';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  public href: string = "";
  private id :any=[];
  public focus;
  public listTitles: any[];
  public location: Location;
  userPersonalData:any;
  
  constructor(location: Location, private authservice:AuthService,  private element: ElementRef, private router: Router,private route: ActivatedRoute,private http:HttpClient) {
    this.location = location;
  }

  ngOnInit() {
    this.listTitles = ROUTES.filter(listTitle => listTitle);
    this.car();
    this.getUserData();
  }
  getTitle(){
    var titlee = this.location.prepareExternalUrl(this.location.path());
    if(titlee.charAt(0) === '#'){
        titlee = titlee.slice( 1 );
    }

    for(var item = 0; item < this.listTitles.length; item++){
        if(this.listTitles[item].path === titlee){
            return this.listTitles[item].title;
        }
    }
    return 'Dashboard';
  }

  car(){
    this.href = this.router.url.indexOf('/') > -1 ? this.router.url.split('/')[1] : this.router.url;
    console.log(this.router.url);
    this.id = this.route.snapshot.paramMap.get('id');
    console.log(this.id,"id");
    console.log(this.href,"href");
  }


 // getUserData(){
 //   let auth_token=localStorage.getItem('token');
 //   const header=new HttpHeaders({
 //     'Content-Type': 'application/json',
 //     'Authorization': 'Bearer '+auth_token
 //   });
 //   const requestOptions = { headers: header };
 //   this.http.get<any>('https://webtriggersusersapi.herokuapp.com/users/'+localStorage.getItem('userid'),requestOptions).subscribe(data => {
  //    console.log(data, 'Armani_Local');
//this.userPersonalData = data;
  //    console.log(this.userPersonalData, 'userPersonalData');
      //this.login.reset();
  //});
  //}

  getUserData(){
    this.authservice.getUserData().subscribe(data => {
     console.log(data, 'Get-Data');
     this.userPersonalData = data;
     console.log(this.userPersonalData, 'Get-Data');

  });
 }
  
}
