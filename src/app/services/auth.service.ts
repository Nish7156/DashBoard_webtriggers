import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
    token: any;
    userid: any;

    constructor(private http:HttpClient,public fb: FormBuilder,private router: Router) { }



    PostDataUser(data:any): Observable<any> {
       // console.log(data, 'Postdata');
        return this.http.post('https://webtriggersusersapi.herokuapp.com/users/authenticate',data);
         }
        


  //getUserData(){
   // let auth_token=this.token;
   // const header=new HttpHeaders({
   //   'Content-Type': 'application/json',
  //    'Authorization': 'Bearer '+auth_token
  //  });
  //  const requestOptions = { headers: header };
  //  this.http.get<any>('https://webtriggersusersapi.herokuapp.com/users/'+this.userid,requestOptions).subscribe(data => {
   //   console.log(data, 'Armani');
      //this.login.reset();
  //});
  //}

  getUserData(): Observable<any>{
        let auth_token=localStorage.getItem('token');
        const header=new HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': 'Bearer '+auth_token
        });
        const requestOptions = { headers: header };
        return this.http.get<any>('https://webtriggersusersapi.herokuapp.com/users/'+localStorage.getItem('userid'),requestOptions);

    }
    getAllUserData(): Observable<any>{
        let auth_token=localStorage.getItem('token');
        const header=new HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': 'Bearer '+auth_token
        });
        const requestOptions = { headers: header };
        return this.http.get<any>('https://webtriggersusersapi.herokuapp.com/users',requestOptions);

    }
    deleteUserData(id:any): Observable<any>{
        let auth_token=localStorage.getItem('token');
        const header=new HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': 'Bearer '+auth_token
        });
        const requestOptions = { headers: header };
        return this.http.delete<any>('https://webtriggersusersapi.herokuapp.com/users/'+id,requestOptions);

    }
    UpdateUserData(id:any): Observable<any>{
        let auth_token=localStorage.getItem('token');
        const header=new HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': 'Bearer '+auth_token
        });
        const requestOptions = { headers: header };
        return this.http.put<any>('https://webtriggersusersapi.herokuapp.com/users/'+id,requestOptions);

    }
    getSingleUserData(id:any): Observable<any>{
        let auth_token=localStorage.getItem('token');
        const header=new HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': 'Bearer '+auth_token
        });
        const requestOptions = { headers: header };
        return this.http.get<any>('https://webtriggersusersapi.herokuapp.com/users/'+id,requestOptions);

    }
    

}

