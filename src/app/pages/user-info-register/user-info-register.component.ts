import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute, UrlSegment } from '@angular/router';
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

  constructor(private http:HttpClient,public fb: FormBuilder, private service:CommonServiceService) { }

  ngOnInit() {
    this.Contact();
    this.getUserData();
  }

  Contact(){
    this.userData = new FormGroup({
      Address: new FormControl(''),
      City: new FormControl(''),
      Country: new FormControl(''),
      Postalcode: new FormControl(''),
      About: new FormControl(''),
    });
  }

  onSubmit(data: FormGroup) {
    this.service.userDataPost(data.value).subscribe(data => {
      console.log(data, 'User-Post-Data');
      //this.login.reset();
        alert('User Registered Successfully');
        this.userData.reset();
    }
    );
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


