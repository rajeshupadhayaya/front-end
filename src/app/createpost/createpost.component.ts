import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/user.service';
import { HttpErrorResponse } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { DialogComponent } from '../dialog/dialog.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-createpost',
  templateUrl: './createpost.component.html',
  styleUrls: ['./createpost.component.css']
})
export class CreatepostComponent implements OnInit {
  htmlContent = '';
  // message = '';
  
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
      top: '0',
      left: '0'
  };
    dialogConfig.data = {
        title: header,
        msg: msg
    };

    let dialogRef = this.dialog.open(DialogComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog closed: ${result}`);
      // this.dialogResult = result;
      this.router.navigate(['/']);
    });
  }

  OnSubmit(title){
    console.log(title);
    console.log(this.htmlContent);
    var desc = this.htmlContent;
    this.userService.createPost(title,desc).subscribe((data : any)=>{
      // this.message = data.success;
      var header = 'Your Job Has Been Posted!!';
      var msg = 'We have received your job, Your job will be visible to public after verification. You will also receive a mail for your job post approval/rejection. It may take 1-2 hour, Please be patience.';
      this.openDialog(header,msg);
    },
  (err: HttpErrorResponse)=>{
    
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