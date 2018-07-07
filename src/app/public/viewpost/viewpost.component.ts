import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { PostService } from '../../shared/post.service';
import { Globals } from '../../shared/global';
import { MatDialogConfig, MatDialog } from '@angular/material';
import { DialogComponent } from '../../dialog/dialog.component';


@Component({
  selector: 'app-viewpost',
  templateUrl: './viewpost.component.html',
  styleUrls: ['./viewpost.component.css']
})
export class ViewpostComponent implements OnInit {

  id: any;
  data: any;

  constructor(
    private route: ActivatedRoute,
    private postService: PostService,
    private global: Globals,
    private router : Router,
    public dialog: MatDialog,
     
    
  ) { 
    
  }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.postService.getPostDesc(this.id).subscribe((res: any)=>{
      this.data = res.data[0];
    });

  }
  
  openDialog(header, msg) {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.position = {
      top: '',
      left: '',
      right: '',
      bottom: ''
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
      this.router.navigate(['/viewall']);
    });
  }

  requestContact(id){
    
    this.postService.getPostInfo(this.id).subscribe((res: any)=>{
      console.log('req submitted');
      var header = '';
      var msg = 'We have received your request to get details for this job,<br> You will get job details via mail. Please check your mail.'
      this.openDialog(header,msg);
    });

  }

  loginRedirect(){
    
    this.router.navigate(['/login'], {queryParams: {returnUrl: this.router.url}});
  }


}
