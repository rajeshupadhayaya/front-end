import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from '../../shared/user.model';
import { UserService } from '../../shared/user.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { Globals } from '../../shared/global';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user = User;
  isLoginError : boolean = false;
  returnUrl : string;
  constructor(
    private userService : UserService,
    private router : Router,
    private route: ActivatedRoute,
    private global: Globals,
    public toastr: ToastsManager, 
    vcr: ViewContainerRef
  ) { 
    this.toastr.setRootViewContainerRef(vcr);
  }

  ngOnInit() {

    // this.returnUrl = this.router.snapshot.queryParams['returnUrl'] || '/';
    this.route.queryParams
      .subscribe(params => this.returnUrl = params['returnUrl'] || '/');
  }

  showSuccess() {
    this.toastr.success('Logged In', 'Success!');
  }

  showError() {
    this.toastr.error('Login Failed!', 'Oops!');
  }

  OnSubmit(email,password){
    this.userService.userAuthentication(email,password).subscribe((data : any)=>{
      localStorage.setItem('userToken',data.access_token);
      this.global.userLogin = true;
      this.showSuccess();
      this.router.navigateByUrl(this.returnUrl);
    },
  (err: HttpErrorResponse)=>{
    this.isLoginError = true;
    this.showError();
  })
  }

}
