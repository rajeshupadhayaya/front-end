import { Component, OnInit } from '@angular/core';
import { PostService } from '../../shared/post.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  inputval: any;
  searchdata: any;

  constructor(
    private postservice : PostService,
  ) { }

  ngOnInit() {
  }

  onKey(event: any){
    
    this.inputval = event.target.value;
    if(this.inputval.length>=3){
      this.postservice.search(this.inputval).subscribe((res:any)=>{
        this.searchdata = res.data;
      });
    }

  }
}
