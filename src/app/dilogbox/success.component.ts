import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, Injectable, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute, UrlSegment } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.scss']
})

@Injectable({
  providedIn: 'root'
})
export class SuccessComponent implements OnInit, OnDestroy {

  


  constructor() { }
    ngOnDestroy(): void {
        
    }

  ngOnInit() {
  }
  

}
