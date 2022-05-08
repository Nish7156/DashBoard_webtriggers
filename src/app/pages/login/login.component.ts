import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, Injectable, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute, UrlSegment } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import {MatDialog} from '@angular/material/dialog';
import { SuccessComponent } from 'src/app/dilogbox/success.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

@Injectable({
  providedIn: 'root'
})
export class LoginComponent implements OnInit, OnDestroy {

  login: FormGroup; 
  public userData!: any[];
  token: any;
  userid;
  loader=false;


  constructor(public dialog: MatDialog,private http:HttpClient,public fb: FormBuilder,private router: Router, public service:AuthService) { }

  ngOnInit() {
    this.Contact();
  }
  ngOnDestroy() {
  }

  Contact(){
    this.login = new FormGroup({
      username: new FormControl(''),
      password: new FormControl(''),
    });
  }

  //shedagenishant40@gmail.com
  //Nishant@123

  onSubmit(data: FormGroup) {
    console.log(data.value);
    this.service.PostDataUser(data.value).subscribe(data => {
      console.log(data, 'Postdata');
      this.loader=true;
      this.userid = data.id;
      console.log(this.userid, 'userid');
      localStorage.setItem('userid',this.userid); // setting Local Storage
      console.log(localStorage.getItem('userid'));
      this.token = data.token;
      console.log(this.token, 'token');
      localStorage.setItem('token',this.token); // setting Local Storage
      console.log(localStorage.getItem('token'));
      this.userData = data.data;
      console.log(this.userData, 'userData');
      this.login.reset();
      this.router.navigate(['/fullregister/'+data.id])
      // this.getUserData();
      this.service.getUserData();

  });
    }

    
    

}
