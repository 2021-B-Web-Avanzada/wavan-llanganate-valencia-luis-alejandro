import { Component, OnInit } from '@angular/core';
import IRepository from 'src/app/core/repository/repository.interface';
import { RepositoryService } from 'src/app/core/repository/repository.service';

@Component({
  selector: 'app-repositories',
  templateUrl: './repositories.component.html',
  styleUrls: ['./repositories.component.sass']
})
export class RepositoriesComponent implements OnInit {

  repositories : IRepository[]

  constructor(
    private repositoryService : RepositoryService
  ) { }

  ngOnInit(): void {
    this.repositoryService.getRepos().subscribe(
      repos => {
        this.repositories = repos
      }
    )
  }

}
