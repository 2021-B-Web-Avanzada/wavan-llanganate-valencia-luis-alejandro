import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import IUser from './user.interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private githubURL = `${environment.apiURL}users/${environment.username}`

  constructor(
    private http: HttpClient
  ) { }

  getUserInfo(): Observable<IUser>{
    return this.http.get<any>(this.githubURL)
    .pipe(
      map(
        (data : any) : IUser => {
          return {
            avatarUrl: data.avatar_url,
            bio: data.bio,
            company: data.company,
            location: data.location,
            login: data.login,
            name: data.name,
            twitter: data.twitter_username,
            followers: data.followers,
            following: data.following,
          }
        }
      )
    )
  }
}
