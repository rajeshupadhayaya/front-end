import { Component, OnInit } from "@angular/core";
import { MatDialogConfig, MatDialog } from "@angular/material";
import { DialogComponent } from "../../dialog/dialog.component";
import { AdminService } from "../../shared/admin.service";
import { Router } from "@angular/router";
import { PostService } from "../../shared/post.service";

@Component({
  selector: "app-viewrequest",
  templateUrl: "./viewrequest.component.html",
  styleUrls: ["./viewrequest.component.css"],
})
export class ViewrequestComponent implements OnInit {
  data: [{}];
  isLoading: boolean = true;
  index: number;

  constructor(
    public dialog: MatDialog,
    private adminService: AdminService,
    private router: Router,
    private postservice: PostService
  ) {}

  ngOnInit() {
    this.getdata();
  }

  getdata() {
    this.adminService.getViewRequest().subscribe((res: any) => {
      this.isLoading = false;
      this.data = res.data;
    });
  }

  openDialog(post, request_id) {
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
      title: post.title,
      msg: post.description,
      ok: "Approve",
      cancel: "Reject",
      header: "Approve/Reject Detail Request",
    };

    let dialogRef = this.dialog.open(DialogComponent, dialogConfig);

    dialogRef.afterClosed().subscribe((result) => {
      if (result == "Confirm") {
        //approve request
        this.adminService
          .approveRequest(request_id, 1)
          .subscribe((res: any) => {
            console.log("approved");
          });
        this.getdata();
      } else if (result == "Cancel") {
        //reject request
        this.adminService
          .approveRequest(request_id, 0)
          .subscribe((res: any) => {
            console.log("rejected");
          });
        this.getdata();
      }
      this.router.navigate(["/viewrequest"]);
    });
  }

  // requestAction(request_id, slug) {
  //   // console.log(request_id,post_id);
  //   this.postservice.getPostDesc(slug).subscribe((res: any) => {
  //     var data = res.data[0];
  //     var header = data.title;
  //     var msg = data.description;
  //     this.openDialog(header, msg, request_id);
  //   });
  // }
}
