import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonServiceService {

  constructor(private http:HttpClient,private router: Router) { }

  onSubmit(data) {
    console.log(data.value, 'data');
    this.http.post<any>('https://webtriggersusersapi.herokuapp.com/users/authenticate',data.value).subscribe(data => {
      console.log(data, 'Postdata');
     // this.userinfo = data;
     // console.log(this.userinfo, 'userinfo');
    //  data.token = data.token;
      //this.login.reset();
       // this.router.navigate(['/dashboard'], { queryParams: { id: data.id }})
    
     })
    }
    loogin(data){
      return this.http.post('https://webtriggersusersapi.herokuapp.com/users/authenticate',data);
    }

  loginData(){
   return this.http.get('https://webtriggersusersapi.herokuapp.com/users');
   }

   loginPost(data){
    return this.http.post('https://webtriggersusersapi.herokuapp.com/users/register',data);
    }


    putUserData(data:any): Observable<any>{
      let auth_token=localStorage.getItem('token');
      const header=new HttpHeaders({
          'Content-Type': 'application/json',
          'Authorization': 'Bearer '+auth_token
      });
      const requestOptions = { headers: header };
      return this.http.put<any>('https://webtriggersusersapi.herokuapp.com/users/'+localStorage.getItem('userid'),requestOptions,data.value);

  }
    userDataGet(){
      return this.http.get('https://webtriggersusersapi.herokuapp.com/users/');
    }


   }
