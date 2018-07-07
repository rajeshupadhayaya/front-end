import { Component, ViewContainerRef } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from './shared/user.service';
import { Globals } from './shared/global';
import {ToasterService} from 'angular2-toaster';

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
    private toasterService: ToasterService
  )
  {
    
    
    this.toasterService = toasterService;
  }
  ngOnInit() {

    
  }

  
}
