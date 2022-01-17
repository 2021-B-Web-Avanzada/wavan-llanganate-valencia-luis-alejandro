import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import IRepository from './repository.interface';

@Injectable({
  providedIn: 'root'
})
export class RepositoryService {

  private githubURL = `${environment.apiURL}users/${environment.username}/repos`

  constructor(
    private http: HttpClient
  ) { }

  getRepos(): Observable<IRepository[]> {
    return this.http.get<any>(this.githubURL)
      .pipe(
        map(
          (data: any): IRepository[] => {
            return data.map(
              (repository: any) => {
                return {
                  name: repository.name,
                  description: repository.description,
                  html_url: repository.html_url,
                  license: repository.license,
                  updated_at: repository.updated_at,
                  url: repository.url,
                  visibility: repository.visibility,
                  language: repository.language,
                }
              }
            )
          }
        )
      )
  }
}
