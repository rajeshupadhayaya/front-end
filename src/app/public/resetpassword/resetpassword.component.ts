import { UserService } from './../../shared/user.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.css']
})
export class ResetpasswordComponent implements OnInit {

  authid: any;
  email: any;
  isValid: boolean;
  msg: any;

  constructor(
    private route: ActivatedRoute,
    private userservice: UserService,
  ) { }

  ngOnInit() {

    this.authid = this.route.snapshot.paramMap.get('token');
    this.email = this.route.snapshot.paramMap.get('email');
    this.userservice.resetPassword(this.email,this.authid).subscribe((data: any)=>{
      this.msg = 'You have successfully changed the password, Please login <a routerLink=/login>here</a>';
    },
    (err:HttpErrorResponse)=>{
      this.msg = 'Invalid Page';
    });
  }


}
