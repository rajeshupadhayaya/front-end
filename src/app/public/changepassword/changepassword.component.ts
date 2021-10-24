import { Component, OnInit } from "@angular/core";
import { UserService } from "./../../shared/user.service";
import { ToasterService } from "angular2-toaster";
import { HttpErrorResponse } from "@angular/common/http";

@Component({
  selector: "app-changepassword",
  templateUrl: "./changepassword.component.html",
  styleUrls: ["./changepassword.component.css"],
})
export class ChangepasswordComponent implements OnInit {
  constructor(
    private userService: UserService,
    private toasterService: ToasterService
  ) {}

  passwordForm: any = {
    current_password: "",
    password: "",
    password_confirmation: "",
  };

  ngOnInit() {}

  OnSubmit(passwordForm) {
    this.userService.changePassword(passwordForm).subscribe(
      (data: any) => {
        this.toasterService.pop("error", data.success);
      },
      (err: HttpErrorResponse) => {
        let msg =
          "Error on updating data, Please check input password details.";
        if (err.error.errors) {
          const keys = Object.keys(err.error.errors);
          console.log(keys);
          msg = err.error.errors[keys[0]];
        }
        if (err.error.error) {
          msg = err.error.error;
        }

        this.toasterService.pop("error", msg);
      }
    );
  }
}
