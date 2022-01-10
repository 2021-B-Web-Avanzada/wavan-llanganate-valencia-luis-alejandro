import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/core/user/user.service';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.sass']
})
export class UserInfoComponent implements OnInit {

  imageURL = ""
  name = ""
  username = ""
  description = ""
  followers = ""
  following = ""
  location = ""
  twitter = ""
  company = ""

  constructor(
    private service: UserService
  ) { }

  ngOnInit(): void {
    this.service.getUserInfo().subscribe(
      data => {
        this.imageURL = data.avatarUrl
        this.name = data.name
        this.username = data.login
        this.description = data.bio
        this.followers = data.followers,
          this.following = data.following,
          this.location = data.location,
          this.twitter = data.twitter,
          this.company = data.company
      }
    )
  }

}
