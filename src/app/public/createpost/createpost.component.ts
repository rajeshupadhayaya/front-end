import { Component, OnInit } from '@angular/core';
import { UserService } from '../../shared/user.service';
import { HttpErrorResponse } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { DialogComponent } from '../../dialog/dialog.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-createpost',
  templateUrl: './createpost.component.html',
  styleUrls: ['./createpost.component.css']
})
export class CreatepostComponent implements OnInit {
  htmlContent: any;
  
  constructor(
    private userService : UserService,
    public dialog: MatDialog,
    private router : Router
  ) { }

  ngOnInit() {
    
  }

  openDialog(header, msg) {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.position = {
      top: '',
      left: '',
      bottom: '',
      right: ''
  };
    dialogConfig.data = {
        title: header,
        msg: msg,
        ok: 'CONFIRM',
        cancel: 'CANCEL',
        header: 'Thank You'
    };

    let dialogRef = this.dialog.open(DialogComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog closed: ${result}`);
      // this.dialogResult = result;
      this.router.navigate(['/']);
    });
  }

  OnSubmit(title){
    var desc = this.htmlContent;
    this.userService.createPost(title,desc).subscribe((data : any)=>{
      // this.message = data.success;
      var header = 'Your Job Has Been Posted!!';
      var msg = 'We have received your job, Your job will be visible to public after verification.</br> You will also receive a mail for your job post approval/rejection. </br>It may take 1-2 hour, Please be patience.';
      this.openDialog(header,msg);
    },
  (err: HttpErrorResponse)=>{
    var header = 'Error in Job Posting!!';
      var msg = 'Sorry, we are unable to post job at this time. Please try after sometime.';
      this.openDialog(header,msg);
  })
  }

  config: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    height: '25rem',
    minHeight: '5rem',
    placeholder: 'Enter Job Description here...',
    translate: 'no'
  };


}
