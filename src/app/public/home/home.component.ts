import { Component, OnInit } from '@angular/core';
import { PostService } from '../../shared/post.service';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  searchdata: any;
  searchTerm : FormControl = new FormControl();
  searchResult = [];
  
  constructor(private postservice : PostService) { 
    this.searchTerm.valueChanges.pipe(debounceTime(500))
    .subscribe(data =>{
      this.postservice.search(data).subscribe((data:any)=>{
        this.searchResult = data.data;
        // var result = data.data;
        // console.log(result);
      });
    })
  }

  ngOnInit() {
    }


  queryPage(query){
    console.log(query.value);
  }
}
