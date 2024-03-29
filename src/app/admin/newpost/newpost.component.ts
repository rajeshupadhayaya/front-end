import { Component, OnInit } from "@angular/core";
import { MatDialog, MatDialogConfig } from "@angular/material";
import { AdminService } from "../../shared/admin.service";
import { DialogComponent } from "../../dialog/dialog.component";
import { Router } from "@angular/router";

@Component({
  selector: "app-newpost",
  templateUrl: "./newpost.component.html",
  styleUrls: ["./newpost.component.css"],
})
export class NewpostComponent implements OnInit {
  data: [{}];
  isLoading: boolean = true;
  index: number;

  constructor(
    public dialog: MatDialog,
    private adminService: AdminService,
    private router: Router
  ) {}

  ngOnInit() {
    this.getdata();
  }

  getdata() {
    this.adminService.getNewPost().subscribe((res: any) => {
      this.isLoading = false;
      this.data = res.data;
    });
  }

  openDialog(header, msg, request_id) {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;

    dialogConfig.position = {
      top: "",
      bottom: "",
      left: "",
      right: "",
    };

    dialogConfig.data = {
      title: header,
      msg: msg,
      ok: "Approve",
      cancel: "Reject",
      header: "Approve/Reject New Post",
    };

    let dialogRef = this.dialog.open(DialogComponent, dialogConfig);

    dialogRef.afterClosed().subscribe((result) => {
      console.log(result);
      if (result == "Confirm") {
        //approve request
        this.adminService.updatePost(request_id, 1).subscribe((res: any) => {
          console.log("approved");
        });
        this.getdata();
      } else if (result == "Cancel") {
        //reject request
        this.adminService.updatePost(request_id, 0).subscribe((res: any) => {
          console.log("rejected");
        });
        this.getdata();
      }

      this.router.navigate(["/newpost"]);
    });
  }

  requestAction(id, title, description) {
    this.openDialog(title, description, id);
  }
}
