import { HttpClient } from '@angular/common/http';
import { R3DeclareUsedDirectiveMetadata } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Data, Router } from '@angular/router';
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
userinfo;
usermaininfo;
id=this.route.snapshot.paramMap.get('id');
//id:any=16;


public href: string = "";


  constructor(private http:HttpClient,public fb: FormBuilder, private service:CommonServiceService,private route:ActivatedRoute,private router: Router) { }

  ngOnInit() {
    this.bar();
    this.GetData();
    this.ids();
    
  }

  bar(){
    this.service.loginData().subscribe(data => {
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
    this.service.userDataGet().subscribe(data => {
      console.log(data, 'User-Get-Data');
      this.usersData = data;
      this.car=this.usersData;
      console.log(this.usersData, 'User-Get-Data');
    })
   }

   ids(){
     this.http.get('http://localhost:4400/users/'+this.id).subscribe(data => {
      this.usermaininfo = data;
      console.log(this.usermaininfo, 'Get-Data-login');
   });
   
      this.http.get<any>('http://localhost:8080/api/users/2').subscribe(data => {
        console.log(data,'Getdata-ID');
        this.userinfo = data;
    });
    localStorage.setItem('test', this.id);
   console.log(localStorage.getItem('test'), 'localStorage');

    
   }

}
