import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.scss']
})
export class TablesComponent implements OnInit {
  Users:any=[];
  id=this.route.snapshot.paramMap.get('id');
  ids:any=[];

  constructor(private http:HttpClient,public fb: FormBuilder,private router: Router,private route:ActivatedRoute) { }

  ngOnInit() {
    this.car();
  }


  car(){
    this.http.get('https://webtriggersusersapi.herokuapp.com/users/').subscribe(data => {
      this.Users = data;
      console.log(this.Users, 'All-Data-login');
   });
   localStorage.setItem('test', this.id);
   console.log(localStorage.getItem('test'), 'localStorage');
   sessionStorage.setItem('test', this.id);
    console.log(sessionStorage.getItem('test'), 'sessionStorage');
  }

}
