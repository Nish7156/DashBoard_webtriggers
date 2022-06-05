import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, Inject, Injectable, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router, ActivatedRoute, UrlSegment } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { ConfirmDialogData } from '../models/confirm-dialog-data';

@Component({
  selector: 'app-login',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.scss']
})

@Injectable({
  providedIn: 'root'
})
export class SuccessComponent implements OnInit {

  register=false;
  color=true;

  constructor(@Inject(MAT_DIALOG_DATA) public data: ConfirmDialogData,private route:ActivatedRoute,private router: Router) {}

  

  ngOnInit() {
    console.log(this.router.url)
    if(this.router.url=='/register'){
      this.register=true;
    }
    if(this.router.url=='/login'){
      this.color=false;
    }
    
  }
  

}
