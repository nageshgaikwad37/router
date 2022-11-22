import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-dashbord',
  templateUrl: './dashbord.component.html',
  styleUrls: ['./dashbord.component.scss']
})
export class DashbordComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  gotoProduct(){
    this.router.navigate(['/product'])
  }

}
