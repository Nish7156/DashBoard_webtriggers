import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, Injectable, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute, UrlSegment } from '@angular/router';

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


  constructor(private http:HttpClient,public fb: FormBuilder,private router: Router) { }

  ngOnInit() {
    this.Contact();
  }
  ngOnDestroy() {
  }

  Contact(){
    this.login = new FormGroup({
      username: new FormControl('shedagenishant40@gmail.com'),
      password: new FormControl('Nishant@123'),
    });
  }

  onSubmit(data: FormGroup) {
    console.log(data.value, 'data');
    this.http.post<any>('https://webtriggersusersapi.herokuapp.com/users/authenticate',data.value).subscribe(data => {
      console.log(data, 'Postdata');
      this.userid = data.id;
      console.log(this.userid, 'userid');
      localStorage.setItem('userid',this.userid); // setting
      console.log(localStorage.getItem('userid')); 
      this.token = data.token;
      console.log(this.token, 'token');
      localStorage.setItem('token',this.token); // setting
      console.log(localStorage.getItem('token')); 
      this.userData = data.data;
      console.log(this.userData, 'userData');
      //this.login.reset();
        this.router.navigate(['/fullregister/'+data.id])
      this.getUserData();
    
     })
    }

    

    getUserData(){
      let auth_token=this.token;
      const header=new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer '+auth_token
      });
      const requestOptions = { headers: header };
      this.http.get<any>('https://webtriggersusersapi.herokuapp.com/users/'+this.userid,requestOptions).subscribe(data => {
        console.log(data, 'Armani');
        //this.login.reset();
    });
    }


}
