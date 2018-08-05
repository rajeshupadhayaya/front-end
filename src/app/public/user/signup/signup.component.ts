import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from '../../../shared/user.model';

import { UserService } from '../../../shared/user.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { Globals } from '../../../shared/global';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  user: User;
  isSignupError : boolean = false;
  returnUrl : string;
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";

  constructor(
    private userService : UserService,
    private router : Router,
    private route: ActivatedRoute,
    private gobal: Globals
  ) { }

  ngOnInit() {
    this.resetForm();
    this.route.queryParams
      .subscribe(params => this.returnUrl = params['returnUrl'] || '/');
  }

  resetForm(form?: NgForm){
    if(form!=null)
    form.reset();
    this.user = {
      email: '',
      password: ''
      
    }
  }

  OnSubmit(email,password){
    this.user = {
      email: email,
      password: password
    };
    console.log(this.user);
    this.userService.registerUser(this.user).subscribe((data : any)=>{
      localStorage.setItem('userToken',data.access_token);
      // this.router.navigate(['/home']);
      this.gobal.userLogin = true;
      this.router.navigateByUrl(this.returnUrl);
    },
  (err: HttpErrorResponse)=>{
    this.isSignupError = true;
  })
  }
}
