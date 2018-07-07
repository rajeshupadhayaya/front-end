import { Component, OnInit } from '@angular/core';
import { MatDialogConfig, MatDialog } from '@angular/material';
import { DialogComponent } from '../../dialog/dialog.component';
import { AdminService } from '../../shared/admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-viewrequest',
  templateUrl: './viewrequest.component.html',
  styleUrls: ['./viewrequest.component.css']
})
export class ViewrequestComponent implements OnInit {
  data : [
    {}
  ];
  isLoading : boolean = true;
  index: number;

  constructor(
    public dialog: MatDialog,
    private adminService: AdminService,
    private router : Router,
  ) { }

  ngOnInit() {
    this.getdata();
  }
  
  getdata(){
    this.adminService.getViewRequest().subscribe((res: any)=>{
      this.isLoading = false;
      this.data = res.data;
      console.log(this.data);
    });
  }
  
  openDialog(header, msg, request_id) {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
    
    dialogConfig.position = {
      top: '',
      bottom: '',
      left: '',
      right: ''
    };
    
    dialogConfig.data = {
        title: header,
        msg: msg,
        ok: 'Approve',
        cancel: 'Reject',
        header: 'Approve/Reject Detail Request'
    };

    let dialogRef = this.dialog.open(DialogComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(result => {

      if(result == 'Confirm'){
        //approve request
        this.adminService.approveRequest(request_id,1).subscribe((res: any)=>{
            console.log('approved');
        });
        this.getdata();
      }else if(result == 'Confirm'){
        //reject request
        this.adminService.approveRequest(request_id,0).subscribe((res: any)=>{
          console.log('rejected');
        });
        this.getdata();
      }

      // this.dialogResult = result;
      
      this.router.navigate(['/viewrequest']);
    });
  }

  requestAction(request_id,post_id){
    // console.log(request_id,post_id);


    var header = 'Post Details';

    var msg = 'We have received your job, Your job will be visible to public after verification. You will also receive a mail for your job post approval/rejection. It may take 1-2 hour, Please be patience.';
    this.openDialog(header,msg, request_id);
  }
}