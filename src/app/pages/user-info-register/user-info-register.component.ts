import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router, ActivatedRoute, UrlSegment } from '@angular/router';
import { SuccessComponent } from 'src/app/dilogbox/success.component';
import { CommonServiceService } from 'src/app/services/common-service.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-info-register.component.html',
  styleUrls: ['./user-info-register.component.scss']
})
export class UserInfoRegisterComponent implements OnInit {

  userData: FormGroup;

  usersData:any=[];
  userPersonalData:any;

  constructor(public dialog: MatDialog,private http:HttpClient,public fb: FormBuilder, private service:CommonServiceService) { }

  ngOnInit() {
    this.Contact();
    this.getUserData();
  }

  Contact(){
    this.userData = new FormGroup({
      address: new FormControl(''),
      City: new FormControl(''),
      country: new FormControl(''),
      phone: new FormControl(''),
      zip: new FormControl(''),
      about: new FormControl(''),
      image: new FormControl(''),
    });
  }

  onSubmit(data: FormGroup) {
    console.log(data.value, 'data');
    let auth_token=localStorage.getItem('token');
    const header=new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer '+auth_token
    });
    const requestOptions = { headers: header };
    this.http.put<any>('https://webtriggersusersapi.herokuapp.com/users/'+localStorage.getItem('userid'),data.value,requestOptions).subscribe(data => {
      console.log(data, 'Armani_Local_put');
      this.userData.reset();
      this.openDialog();

  });
  }
 openDialog() {
      this.dialog.open(SuccessComponent);
    }

   //For Local Storage

   //   console.log(localStorage.getItem('token'));
   // console.log(localStorage.getItem('userid'));

   getUserData(){
    let auth_token=localStorage.getItem('token');
    const header=new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer '+auth_token
    });
    const requestOptions = { headers: header };
    this.http.get<any>('https://webtriggersusersapi.herokuapp.com/users/'+localStorage.getItem('userid'),requestOptions).subscribe(data => {
      console.log(data, 'Armani_Local');
      this.userPersonalData = data;
      console.log(this.userPersonalData, 'userPersonalData');
      //this.login.reset();
  });
  }

  

}


