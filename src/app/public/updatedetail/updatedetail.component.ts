import { UserService } from './../../shared/user.service';
import { NgForm, FormsModule, FormGroup} from '@angular/forms';
import { Component, OnInit, NgModule } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import {ToasterService} from 'angular2-toaster';

@Component({
  selector: 'app-updatedetail',
  templateUrl: './updatedetail.component.html',
  styleUrls: ['./updatedetail.component.css']
})
export class UpdatedetailComponent implements OnInit {
  
  isVerified: boolean = false;
  
  user:any;

  constructor(
    private userService : UserService,
    private toasterService: ToasterService
  ) { }

  ngOnInit() {
    //invoke service to get user info
    
    this.user = JSON.parse(localStorage.getItem('userDetail'));
      this.isVerified = this.user.isemailverified;
  // this.user = {'email':'intdia@gmail.com','name':'rajesh','phone_no':'9891230763','address_1':'line1','address_2':'line2','gender':'M',
  // 'pincode':'110031','city':'delhi','company_name':'test company'};    
  }

  error(msg) {
    this.toasterService.pop('success', msg);
  }

  success(msg) {
    this.toasterService.pop('error', msg);
  }

  OnSubmit(user){
    //invoke service to update user info
    console.log(user);
    this.userService.updateDetails(user).subscribe((data:any)=>{
      var msg='Your Details are successfully updated';
      this.success(msg);
    },
    (err: HttpErrorResponse)=>{
      var msg = 'We are unable to process the request at the moment';
      this.error(msg);
    })
  }
  
  emailverify(){
    this.userService.generateVerifyEmail().subscribe((data:any)=>{
      
      var msg='We have sent you a e-mail with verification link, Please check the email';
      this.success(msg);
    },
    (err: HttpErrorResponse)=>{
      var msg = 'We are unable to verify Email currently, please try after some time';
      this.error(msg);
    
  });
    
  }


}
