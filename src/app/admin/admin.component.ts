import { Component, OnInit } from '@angular/core';
import { Globals } from './../shared/global';
import { HttpErrorResponse } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import {ToasterService} from 'angular2-toaster';
import { AdminService } from '../shared/admin.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  isLoginError : boolean = false;

  constructor(
    private adminService : AdminService,
    private router : Router,
    private route: ActivatedRoute,
    private global: Globals,
    private toasterService: ToasterService
  ) { }

  ngOnInit() {
    if(localStorage.getItem('adminToken')!=null){
      
      this.global.isAdmin = true;
    }

  }

  showLoginSuccess() {
    this.toasterService.pop('success', 'Logged In');
  }

  showLoginError() {
    this.toasterService.pop('error', 'Invalid Login');
  }
  
  showLogoutSuccess() {
    this.toasterService.pop('success', 'Logged Out');
  }

  OnSubmit(email,password){
    
    this.adminService.adminAuthentication(email,password).subscribe((data : any)=>{
      localStorage.setItem('adminToken',data.admin_Token);
      this.global.isAdmin = true;
      this.showLoginSuccess();
      this.router.navigate(['/admin']);
    },
  (err: HttpErrorResponse)=>{
    this.isLoginError = true;
    this.showLoginError();
    
  })
  }

  Logout(){
    this.adminService.adminLogout();
    this.showLogoutSuccess();
    localStorage.removeItem('adminToken');
    
    this.router.navigate(['/admin']);
    this.global.isAdmin = false;
  }

}
