import { HttpClient } from '@angular/common/http';
import { R3DeclareUsedDirectiveMetadata } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Data, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { CommonServiceService } from 'src/app/services/common-service.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

  public car = {publicInformation : {}};
  userData:any=[];
userName:any=[];
usersData;
userinfo:any;
usermaininfo;
id=this.route.snapshot.paramMap.get('id');
//id:any=16;
userPersonalData:any;


public href: string = "";


  constructor(private http:HttpClient,public fb: FormBuilder, private service:AuthService, private commonService:CommonServiceService,private route:ActivatedRoute,private router: Router) { }

  ngOnInit() {
    this.getUserData();
    
  }

  bar(){
    this.commonService.loginData().subscribe(data => {
      this.userData = data;
      console.log(this.userData, 'Service_call');



      let index = this.userData.findIndex(x => x.firstName, this.userData.firstName);
      console.log(index);
      let index1 = this.userData.findIndex(x => x.lastName, this.userData.lastName);
      console.log(index1);
      let index2 = this.userData.findIndex(x => x.username, this.userData.username);
      console.log(index2);
      let index3 = this.userData.findIndex(x => x.updatedAt, this.userData.updatedAt);
      console.log(index3);


      var res = this.userData.map(t=>t.username);
      console.log(res);
      this.userName = res;

      //data.token = data.token;
      //this.login.reset();
        //this.router.navigate(['/dashboard']);
    
     }
    )
   }

   GetData(){
    this.commonService.userDataGet().subscribe(data => {
      console.log(data, 'User-Get-Data');
      this.usersData = data;
      this.car=this.usersData;
      console.log(this.usersData, 'User-Get-Data');
    })
   }

   ids(){
     this.http.get('https://webtriggersusersapi.herokuapp.com/users/'+this.id).subscribe(data => {
      this.usermaininfo = data;
      console.log(this.usermaininfo, 'Get-Data-login');
   });
   
      this.http.get<any>('https://webtriggersusersapi.herokuapp.com/users/').subscribe(data => {
        console.log(data,'Getdata-ID');
        this.userinfo = data;
    });
    localStorage.setItem('test', this.id);
   console.log(localStorage.getItem('test'), 'localStorage');

    
   }

   getUserData(){
     this.service.getUserData().subscribe(data => {
      console.log(data, 'Get-Data');
      this.userPersonalData = data;
      console.log(this.userPersonalData, 'Get-userPersonalData_user_profile');

   });
  }

  

}
