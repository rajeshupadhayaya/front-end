import { Component, ViewContainerRef, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from './../shared/user.service';
import { Globals } from './../shared/global';
import {ToasterService} from 'angular2-toaster';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-public',
  templateUrl: './public.component.html',
  styleUrls: ['./public.component.css']
})
export class PublicComponent implements OnInit {

  constructor(
    private userService : UserService,
    private router: Router,
    private global: Globals,
    private toasterService: ToasterService
  ) { }

  ngOnInit() {
    if(localStorage.getItem('userToken')!=null){
      this.userService.userValidate().subscribe((res: any)=>{
        this.global.userLogin = true;
      },
      (err: HttpErrorResponse)=>{
        this.global.userLogin = false;
      });
    }
  }

  showSuccess() {
    this.toasterService.pop('success', 'Logged Out!!', 'Login again');
  }

  Logout(){
    this.userService.userLogout().subscribe((res:  any)=>{
      this.showSuccess();
      localStorage.removeItem('userToken');
      this.router.navigate(['/']);
      this.global.userLogin = false;  
    });
    
  }


}
