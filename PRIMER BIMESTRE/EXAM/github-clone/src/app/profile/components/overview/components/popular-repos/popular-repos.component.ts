import { Component, OnInit } from '@angular/core';
import IRepository from 'src/app/core/repository/repository.interface';
import { RepositoryService } from 'src/app/core/repository/repository.service';

@Component({
  selector: 'app-popular-repos',
  templateUrl: './popular-repos.component.html',
  styleUrls: ['./popular-repos.component.sass']
})
export class PopularReposComponent implements OnInit {

  repos : IRepository[] = [{
    description: "",
    html_url: "",
    language: "",
    license: {
      key: "",
      name: "",
      node_id: "",
      spdx_id: "",
      url: "",
    },
    name: "",
    updated_at: "",
    url: "",
    visibility: ""
  }]

  constructor(
    private repoService : RepositoryService
  ) { }

  ngOnInit(): void {
    this.repoService.getRepos().subscribe(
      repositories => {
        this.repos = repositories
        this.repos = this.repos.slice(5,9)
      }
    )
  }
}
