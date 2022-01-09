import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/core/user/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass']
})
export class NavbarComponent implements OnInit {
  
  userURL : string = ''

  constructor(
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.userService.getUserInfo().subscribe( user => {
      this.userURL = user.avatarUrl
      console.log(this.userURL)
    })
  }

}
