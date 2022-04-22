import { HttpClient } from '@angular/common/http';
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
  token:[] | any;
  userid;


  constructor(private http:HttpClient,public fb: FormBuilder,private router: Router) { }

  ngOnInit() {
    this.Contact();
  }
  ngOnDestroy() {
  }

  Contact(){
    this.login = new FormGroup({
      username: new FormControl('Arman'),
      password: new FormControl('Arman@7156'),
    });
  }

  onSubmit(data: FormGroup) {
    console.log(data.value, 'data');
    this.http.post<any>('http://localhost:4400/users/authenticate',data.value).subscribe(data => {
      console.log(data, 'Postdata');
      this.userid = data.id;
      console.log(this.userid, 'userid');
      data.token = data.token;
      //this.login.reset();
        this.router.navigate(['/dashboard/'+data.id])
    
     })
    }


}
