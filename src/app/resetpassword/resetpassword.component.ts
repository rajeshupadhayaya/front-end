import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.css']
})
export class ResetpasswordComponent implements OnInit {

  authid: any;
  isValid: boolean;
  constructor(
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {

    this.authid = this.route.snapshot.paramMap.get('authid');
    console.log(this.authid);
    //invoke service to check if token is valid
    this.isValid = true;
  }


}
