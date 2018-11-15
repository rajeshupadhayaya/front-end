import { HttpErrorResponse } from '@angular/common/http';
import { UserService } from './../../shared/user.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

@Component({
  selector: 'app-confirmmail',
  templateUrl: './confirmmail.component.html',
  styleUrls: ['./confirmmail.component.css']
})
export class ConfirmmailComponent implements OnInit {
  token: string;
  email: string;
  msg: string;
  
  constructor(
    private route: ActivatedRoute,
    private userservice: UserService,
  ) { }

  ngOnInit() {
    this.token = this.route.snapshot.paramMap.get('token');
    this.email = this.route.snapshot.paramMap.get('email');
    this.userservice.verifyEmail(this.email,this.token).subscribe((data: any)=>{
      this.msg = 'Thank you for verifying your Email id, Please login <a routerLink=/login>here</a>';
    },
    (err:HttpErrorResponse)=>{
      this.msg = 'Invalid Page';
    });
  }

}
