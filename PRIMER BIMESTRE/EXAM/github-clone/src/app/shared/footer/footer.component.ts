import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.sass']
})
export class FooterComponent implements OnInit {

  options = [
    {
      name: "Terms",
      link: "https://docs.github.com/en/github/site-policy/github-terms-of-service",
    },
    {
      name: "Privacy",
      link: "https://docs.github.com/en/github/site-policy/github-privacy-statement",
    },
    {
      name: "Security",
      link: "https://github.com/security",
    },
    {
      name: "Status",
      link: "https://www.githubstatus.com/",
    },
    {
      name: "Docs",
      link: "https://docs.github.com/",
    },
    {
      name: "Contact GitHub",
      link: "https://support.github.com/?tags=dotcom-footer",
    },
    {
      name: "Pricing",
      link: "https://github.com/pricing",
    },
    {
      name: "API",
      link: "https://docs.github.com/",
    },
    {
      name: "Training",
      link: "https://services.github.com/",
    },
    {
      name: "Blog",
      link: "https://github.blog/",
    },
    {
      name: "About",
      link: "https://github.com/about"
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
