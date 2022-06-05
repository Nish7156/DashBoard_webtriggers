import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { DialogService } from 'src/app/services/dialog.service';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.scss']
})
export class TablesComponent implements OnInit {
  Users:any=[];
  id=this.route.snapshot.paramMap.get('id');
  ids:any=[];
  singleData:any;

  constructor(private http:HttpClient,public fb: FormBuilder,private router: Router,private route:ActivatedRoute,
    private dialog: DialogService,public auth:AuthService) { }

  ngOnInit() {
    this.car();
  }

  onUpdate(id){
    console.log(id,'id');
    this.auth.getSingleUserData(id).subscribe(data=>{
      console.log(data,'Single-data');
      this.singleData=data;
      console.log(this.singleData,'Single-data');
      this.openPopup();
      });
  }

   onDelete(id){
     console.log(id,'id');
     this.auth.deleteUserData(id).subscribe(data=>{
       console.log(data,'data');
        this.car();
      });
   }



   displayStyle = "none";
  
   openPopup() {
     this.displayStyle = "block";
   }
   closePopup() {
     this.displayStyle = "none";
   }






  car(){
   this.auth.getAllUserData().subscribe(data=>{
      this.Users=data;
      console.log(this.Users,'Users');
      }
    );
    }
    yesNoDialog() {
      this.dialog
        .confirmDialog({
          title: 'Are you sure?',
          message: 'Are you sure you want to do this?',
          confirmCaption: 'Yes',
          cancelCaption: 'No',
        })
        .subscribe((yes) => {
          if (yes) console.log('The user said YES');
        });
    }
    

}
