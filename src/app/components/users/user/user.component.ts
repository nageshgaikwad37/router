import { Component, OnInit } from '@angular/core';
import { Iuser } from 'src/app/shared/model/data';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  user!:Iuser | undefined;
  userid:number= 1;
  constructor(private userService:UserService) { }

  ngOnInit(): void {
    this.user = this.userService.getuser(this.userid)
  }

}
