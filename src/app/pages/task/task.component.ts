import { HttpClient } from '@angular/common/http';
import { R3DeclareUsedDirectiveMetadata } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Data, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { CommonServiceService } from 'src/app/services/common-service.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {



  constructor() {
    console.log('TaskComponent');
   }

  ngOnInit() {
    
    
  }

  

}
