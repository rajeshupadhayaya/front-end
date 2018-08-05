import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.component.html',
  styleUrls: ['./changepassword.component.css']
})
export class ChangepasswordComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  OnSubmit(password,newpassword){
    console.log(password,newpassword);
    //invoke service to change password
  }

}
