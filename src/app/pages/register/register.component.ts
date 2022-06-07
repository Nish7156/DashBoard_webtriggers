import { HttpClient } from '@angular/common/http';
import { Component, Injectable, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute, UrlSegment } from '@angular/router';
import { SuccessComponent } from 'src/app/dilogbox/success.component';
import { CommonServiceService } from 'src/app/services/common-service.service';
import {MatDialog} from '@angular/material/dialog';
import { DialogService } from 'src/app/services/dialog.service';
import { GoogleLoginProvider, SocialAuthService, SocialUser } from 'angularx-social-login';

import { LoaderService } from 'src/app/services/loader.service';
@Injectable({
  providedIn: 'root'
})
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  user: SocialUser;
  signup: FormGroup; 
  router: any;
  pass:any;

  constructor(public _personService:LoaderService,private http:HttpClient,public fb: FormBuilder, private service:CommonServiceService,
    private dialog: DialogService,public authService:SocialAuthService) { }

  ngOnInit() {
    this.Contact();
    this.bar();

  }

  Contact(){
    this.signup = new FormGroup({
      username: new FormControl('',[Validators.email,Validators.required]),
      firstName: new FormControl('',[Validators.required,Validators.minLength(3)]),
      lastName: new FormControl('',[Validators.required,Validators.minLength(3)]),
      password: new FormControl('555555555555555555',[Validators.required,Validators.minLength(5-10)]),
      checkbox: new FormControl('',[Validators.required]),
    });
  }
  

  onSubmit(data: FormGroup) {
    this.service.loginPost(data.value).subscribe(data => {
      console.log(data, 'Postdata');
      this.signup.reset();
      this.redirectToLogin();
    }
    )
     }


     signInWithGoogle(): void {
      this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
      console.log(this.authService.authState, 'authState');
      this.authService.authState.subscribe(user => {
        this.user = user;
        console.log('user', user);
      });
    }
  
  
    signOut(): void {
      this.authService.signOut();
    }
  
    refreshGoogleToken(): void {
      this.authService.refreshAuthToken(GoogleLoginProvider.PROVIDER_ID);
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

redirectToLogin() {
  this.dialog
    .confirmDialog({
      title: 'Successfully Registered',
      message: 'Login to continue',
      confirmCaption: 'Yes',
      cancelCaption: 'No',
    })
}
}
