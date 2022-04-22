import { HttpClient } from '@angular/common/http';
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

  constructor(private http:HttpClient,public fb: FormBuilder, private service:CommonServiceService) { }

  ngOnInit() {
    this.Contact();
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

  

}


