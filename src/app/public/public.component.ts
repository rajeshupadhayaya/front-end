import { Component, ViewContainerRef, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { UserService } from "./../shared/user.service";
import { Globals } from "./../shared/global";
import { ToasterService } from "angular2-toaster";
import { HttpErrorResponse } from "@angular/common/http";

@Component({
  selector: "app-public",
  templateUrl: "./public.component.html",
  styleUrls: ["./public.component.css"],
})
export class PublicComponent implements OnInit {
  isProfilePic: boolean = false;
  user: any;

  constructor(
    private userService: UserService,
    private router: Router,
    private global: Globals,
    private toasterService: ToasterService
  ) {}

  ngOnInit() {
    if (localStorage.getItem("userToken") != null) {
      this.userService.userValidate().subscribe(
        (res: any) => {
          this.global.userLogin = true;
          this.user = JSON.parse(localStorage.getItem("userDetail"));
          if (this.user.image != null && this.user.image != "") {
            this.isProfilePic = true;
          }
        },
        (err: HttpErrorResponse) => {
          this.global.userLogin = false;
          localStorage.removeItem("userToken");
        }
      );
    }
  }

  showSuccess() {
    this.toasterService.pop("success", "Logged Out!!", "Login again");
  }

  Logout() {
    this.userService.userLogout().subscribe((res: any) => {
      this.showSuccess();
      localStorage.removeItem("userToken");
      localStorage.removeItem("userDetail");
      this.router.navigate(["/"]);
      this.global.userLogin = false;
    });
  }
}
