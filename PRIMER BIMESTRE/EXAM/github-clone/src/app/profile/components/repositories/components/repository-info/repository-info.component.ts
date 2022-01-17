import { Component, Input, OnInit } from '@angular/core';
import IRepository from 'src/app/core/repository/repository.interface';

@Component({
  selector: 'app-repository-info',
  templateUrl: './repository-info.component.html',
  styleUrls: ['./repository-info.component.sass']
})
export class RepositoryInfoComponent implements OnInit {

  @Input() repository : IRepository

  constructor() { }

  ngOnInit(): void {
  }

}
