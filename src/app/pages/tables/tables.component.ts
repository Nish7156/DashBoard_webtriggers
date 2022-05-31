import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.scss']
})
export class TablesComponent implements OnInit {
  Users:any=[];
  id=this.route.snapshot.paramMap.get('id');
  ids:any=[];

  constructor(private http:HttpClient,public fb: FormBuilder,private router: Router,private route:ActivatedRoute,public auth:AuthService) { }

  ngOnInit() {
    this.car();
  }


  car(){
   this.auth.getAllUserData().subscribe(data=>{
      this.Users=data;
      console.log(this.Users,'Users');
      }
    );
    }
   

}
