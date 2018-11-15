import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from '../../../shared/user.model';
import { UserService } from '../../../shared/user.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { Globals } from '../../../shared/global';
import {ToasterService} from 'angular2-toaster';
import {
    AuthService,
    FacebookLoginProvider,
    GoogleLoginProvider
} from 'angular-6-social-login';

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
    private toasterService: ToasterService,
    private socialAuthService: AuthService
  ) { 
    this.toasterService = toasterService;
  }

  ngOnInit() {

    // this.returnUrl = this.router.snapshot.queryParams['returnUrl'] || '/';
    this.route.queryParams
      .subscribe(params => this.returnUrl = params['returnUrl'] || '/');
  }

  showSuccess() {
    this.toasterService.pop('success', 'Logged In', 'Ready To Go!!');
  }

  showError(err) {
    this.toasterService.pop('danger', 'Invalid Sign In: '+err.error);
  }

  OnSubmit(email,password){
    this.userService.userAuthentication(email,password).subscribe((data : any)=>{
      localStorage.setItem('userToken',data.access_token);
      localStorage.setItem('userDetail',JSON.stringify(data.user));
      this.global.userLogin = true;
      this.showSuccess();
      this.router.navigateByUrl(this.returnUrl);
    },
  (err: HttpErrorResponse)=>{
    this.isLoginError = false;
    
    this.showError(err.error);
  })
  }

public socialSignIn(socialPlatform : string) {
    let socialPlatformProvider;
    if(socialPlatform == "facebook"){
      socialPlatformProvider = FacebookLoginProvider.PROVIDER_ID;
    }else if(socialPlatform == "google"){
      socialPlatformProvider = GoogleLoginProvider.PROVIDER_ID;
    }
    
    this.socialAuthService.signIn(socialPlatformProvider).then(
      (userData) => {

        userData['isemailverified']=1;

        this.userService.socialLogin(userData).subscribe((data : any)=>{
          
          localStorage.setItem('userToken',data.access_token);
          localStorage.setItem('userDetail',JSON.stringify(data.user));
          this.global.userLogin = true;
          this.showSuccess();
          this.router.navigateByUrl(this.returnUrl);
        },
        (err: HttpErrorResponse)=>{
          this.isLoginError = false;
          this.showError(err.error);
        });
        
        // console.log(socialPlatform+" sign in data : " , userData);
        // Now sign-in with userData
        // ...
            
      }
    );
  }

}
