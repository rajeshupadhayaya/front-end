import { HttpErrorResponse } from "@angular/common/http";
import { UserService } from "./../../shared/user.service";
import { Component, OnInit } from "@angular/core";
import {
  ActivatedRoute,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
} from "@angular/router";

@Component({
  selector: "app-confirmmail",
  templateUrl: "./confirmmail.component.html",
  styleUrls: ["./confirmmail.component.css"],
})
export class ConfirmmailComponent implements OnInit {
  token: string;
  id: string;
  msg: string;

  constructor(
    private route: ActivatedRoute,
    private userservice: UserService
  ) {}

  ngOnInit() {
    this.token = this.route.snapshot.paramMap.get("token");
    this.id = this.route.snapshot.paramMap.get("id");
    this.userservice.verifyEmail(this.id, this.token).subscribe(
      (data: any) => {
        this.msg = data.success;
      },
      (err: HttpErrorResponse) => {
        this.msg = err.error.error;
      }
    );
  }
}
