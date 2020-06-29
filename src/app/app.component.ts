import { Component, OnInit } from '@angular/core';
import {UserService} from "./user.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private userService: UserService) {}
  activatedBtnClicked : Boolean = false;
  ngOnInit() {
    this.userService.emitter.subscribe((booleanData) => {
      this.activatedBtnClicked = booleanData;
      console.log(this.activatedBtnClicked);
    });

  }
}
