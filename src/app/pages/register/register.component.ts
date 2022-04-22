import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute, UrlSegment } from '@angular/router';
import { CommonServiceService } from 'src/app/services/common-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  signup: FormGroup; 
  router: any;

  constructor(private http:HttpClient,public fb: FormBuilder, private service:CommonServiceService) { }

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
      //this.login.reset();
        alert('User Registered Successfully');
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

}
