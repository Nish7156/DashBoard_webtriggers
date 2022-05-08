import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute, UrlSegment } from '@angular/router';
import { SuccessComponent } from 'src/app/dilogbox/success.component';
import { CommonServiceService } from 'src/app/services/common-service.service';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  signup: FormGroup; 
  router: any;

  constructor(public dialog: MatDialog,private http:HttpClient,public fb: FormBuilder, private service:CommonServiceService) { }

  ngOnInit() {
    this.Contact();
    this.bar();

  }

  Contact(){
    this.signup = new FormGroup({
      username: new FormControl(''),
      firstName: new FormControl(''),
      lastName: new FormControl(''),
      password: new FormControl(''),
    });
  }

  onSubmit(data: FormGroup) {
    this.service.loginPost(data.value).subscribe(data => {
      console.log(data, 'Postdata');
      this.signup.reset();
      this.openDialog();
    }
    )
     }

     bar(){
      this.service.loginData().subscribe(data => {
        console.log(data, 'Service_call');
        //data.token = data.token;
        //this.login.reset();
          //this.router.navigate(['/dashboard']);
      
       }
      )
     }

     openDialog() {
      this.dialog.open(SuccessComponent);
    }

}
