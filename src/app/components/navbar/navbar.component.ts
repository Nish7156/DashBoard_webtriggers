import { Component, OnInit, ElementRef } from '@angular/core';
import { ROUTES } from '../sidebar/sidebar.component';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  public href: string = "";
  private id :any=[];
  name='car';
  public focus;
  public listTitles: any[];
  public location: Location;
  constructor(location: Location,  private element: ElementRef, private router: Router,private route: ActivatedRoute) {
    this.location = location;
  }

  ngOnInit() {
    this.listTitles = ROUTES.filter(listTitle => listTitle);
    this.car();
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
    console.log(this.id);
  }
}
