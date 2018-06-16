import { Component, ViewContainerRef } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from './shared/user.service';
import { Globals } from './shared/global';
import { ToastsManager } from 'ng2-toastr';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  // userLogin : boolean = false;

  constructor(
    private userService : UserService,
    private router: Router,
    private global: Globals,
    public toastr: ToastsManager, 
    vcr: ViewContainerRef
  )
  {
    this.toastr.setRootViewContainerRef(vcr);
    

  }
  ngOnInit() {

    if(localStorage.getItem('userToken')!=null){
      
      this.global.userLogin = true;
    }
  }

  showSuccess() {
    this.toastr.success('Logged Out', 'Success!');
  }

  Logout(){
    // console.log('logout');
    this.userService.userLogout();
    this.showSuccess();
    localStorage.removeItem('userToken');
    
    this.router.navigate(['/']);
    this.global.userLogin = false;

  }

}
