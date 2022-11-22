import { Injectable } from '@angular/core';
import { Iuser } from '../model/data';

@Injectable({
  providedIn: 'root'
})
export class UserService {
 users: Iuser[]= [{
  userName: 'Sachin',
  userId:1
 },
 {
  userName: 'Virat',
  userId:2
 },
 {
  userName: 'Rohit',
  userId:3
 },
]
  constructor() { }

  getAllusers():Iuser[]{
    return this.users
  }
  getuser(id:number){
    return this.users.find(user => user.userId === id)
  }
}
