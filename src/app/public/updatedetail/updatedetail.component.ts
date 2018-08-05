import { NgForm, FormsModule, FormGroup} from '@angular/forms';
import { Component, OnInit, NgModule } from '@angular/core';

@Component({
  selector: 'app-updatedetail',
  templateUrl: './updatedetail.component.html',
  styleUrls: ['./updatedetail.component.css']
})
export class UpdatedetailComponent implements OnInit {
  
  isVerified: boolean = true;
  user;
  

  constructor() { }

  ngOnInit() {
    //invoke service to get user info
  this.user = {'email':'intdia@gmail.com','name':'rajesh','mobileno':'9891230763','address_1':'line1','address_2':'line2','gender':'M',
  'pincode':'110031','city':'delhi','compname':'test company'};    
  }

  OnSubmit(user){
    //invoke service to update user info
    console.log(user);
  }
  


}
