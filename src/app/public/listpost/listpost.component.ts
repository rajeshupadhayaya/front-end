import { Component, OnInit } from '@angular/core';
import { UserService } from '../../shared/user.service';


@Component({
  selector: 'app-listpost',
  templateUrl: './listpost.component.html',
  styleUrls: ['./listpost.component.css']
})
export class ListpostComponent implements OnInit {
  data : any;
  isLoading : boolean = true;
  constructor(
    private userService : UserService,
  ) { }

  ngOnInit() {
    this.userService.getAllPost().subscribe((res: any)=>{
      this.isLoading = false;
      this.data = res.data;
    });
    
  }

}
