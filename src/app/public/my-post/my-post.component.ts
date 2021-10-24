import { Component, OnInit } from "@angular/core";
import { UserService } from "./../../shared/user.service";

@Component({
  selector: "app-my-post",
  templateUrl: "./my-post.component.html",
  styleUrls: ["./my-post.component.css"],
})
export class MyPostComponent implements OnInit {
  data: any;
  isLoading: boolean = true;
  constructor(private userService: UserService) {}

  ngOnInit() {
    this.userService.getMyPost().subscribe((res: any) => {
      this.isLoading = false;
      this.data = res.data;
    });
  }
}
