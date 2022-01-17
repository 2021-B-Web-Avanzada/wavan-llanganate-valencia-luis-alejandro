import { Component, ElementRef, Inject, Input, OnInit, ViewChild } from '@angular/core';
import IRepository from 'src/app/core/repository/repository.interface';

@Component({
  selector: 'app-popular-repository',
  templateUrl: './popular-repository.component.html',
  styleUrls: ['./popular-repository.component.sass']
})


export class PopularRepositoryComponent implements OnInit {

  @ViewChild('myDiv') myDiv : ElementRef
  @Input() repository: IRepository = {
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
    visibility: "",
  }

  languagesFormat = {
    JavaScript: "#ffb433",
    Tex: "#90eb5b",
    Go: "#17d2eb",
  }

  constructor(
  ) { }

  ngOnInit(): void {
  }

  formatLanguage(language: string): string {
    switch (language) {
      case 'JavaScript':
        return "#ffb433"
      case 'Tex':
        return "#90eb5b"
      case 'Go':
        return "#17d2eb"
      default:
        return "#123456"
    }
  }
}