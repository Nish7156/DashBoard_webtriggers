import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, Injectable, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute, UrlSegment } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import {MatDialog} from '@angular/material/dialog';
import { SuccessComponent } from 'src/app/dilogbox/success.component';
import { LoaderService } from 'src/app/services/loader.service';
import { GoogleLoginProvider, SocialAuthService, SocialUser } from 'angularx-social-login';
import { CommonServiceService } from 'src/app/services/common-service.service';
import { DialogService } from 'src/app/services/dialog.service';
import { FormComponent } from '../popupform/form.component';

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
  googleData: FormGroup;
  public userData!: any[];
  token: any;
  userid;
  //loader=false;

  user: SocialUser;
  GoogleLoginProvider = GoogleLoginProvider;
  contactdata={};
  firstName: any;
  lastName: any;
  username: any;
  password: any;
  data: any;
  allData: any;



  constructor(public _personService:LoaderService ,private http:HttpClient,
    public fb: FormBuilder,private router: Router, public service:AuthService,
    private authService: SocialAuthService,
    private service1:CommonServiceService,private dialog: DialogService,public dialog1: MatDialog,) { }

  ngOnInit() {
    this.Contact();
    this.google();
    console.log(this.router.url, 'router');
  }
  
  Contact(){
    this.login = new FormGroup({
      username: new FormControl('',[Validators.email,Validators.required]),
      password: new FormControl('',[Validators.required,Validators.minLength(5-10)]),
      checkbox: new FormControl(''),
    });
  }
  //shedagenishant40@gmail.com
  //Nishant@123

  onSubmit(data: FormGroup) {
    console.log(data.value);
    this.service.PostDataUser(data.value).subscribe(data => {
      console.log(data, 'Postdata');
      //this.loader=true;
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
      this.login.reset();

  });
 // setInterval(() => {
  //  if(this.router.url=='/login#!'){
  //    this.yesNoDialog();
  //  }
  //  }, 2000);
    }

    ngOnDestroy() {}
     

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
    


  

    google(){
      this.googleData = new FormGroup({
      username: new FormControl(''),
      firstName: new FormControl(''),
      lastName: new FormControl(''),
      password: new FormControl(''),
      });
    }
    newUserSignup(googleData:FormGroup){
      console.log(googleData,'data');
      this.service1.loginPost( this.googleData.value).subscribe(data => {
        console.log(data, 'Postdata');
        this.openDialog();
    });

}

// Dilog Box anyways


yesNoDialog() {
  this.dialog
    .confirmDialog({
      title: 'Are you sure?',
      message: 'Are you sure you want to do this?',
      confirmCaption: 'Yes',
      cancelCaption: 'No',
  })
    .subscribe((yes) => {
      if (yes) console.log('The user said YES');
    });
}

openDialog() {
  this.dialog1.open(FormComponent);
}
}

