import { Component, OnInit } from '@angular/core';
import { Iuser } from 'src/app/shared/model/data';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  users!:Iuser[];
  constructor(private userService:UserService){ }

  ngOnInit(): void {
    this.users =this.userService.getAllusers()
  }

}
