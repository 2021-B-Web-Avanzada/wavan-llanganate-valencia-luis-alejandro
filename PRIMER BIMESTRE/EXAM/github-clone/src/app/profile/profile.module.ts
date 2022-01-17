import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './page/profile.component';
import { SharedModule } from '../shared/shared.module';
import { UserInfoComponent } from './components/user-info/user-info.component';
import { TabsComponent } from './components/tabs/tabs.component';
import { MatTabsModule } from '@angular/material/tabs';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { OverviewSectionComponent } from './components/overview/overview-section/overview-section.component';
import { PopularReposComponent } from './components/overview/components/popular-repos/popular-repos.component';
import { ContributionsComponent } from './components/overview/components/contributions/contributions.component';
import { PopularRepositoryComponent } from './components/overview/components/popular-repository/popular-repository.component';
import { RepositoriesComponent } from './components/repositories/repositories.component';
import { RepositoryInfoComponent } from './components/repositories/components/repository-info/repository-info.component';

@NgModule({
  declarations: [
    ProfileComponent,
    UserInfoComponent,
    TabsComponent,
    PopularReposComponent,
    ContributionsComponent,
    OverviewSectionComponent,
    PopularRepositoryComponent,
    RepositoriesComponent,
    RepositoryInfoComponent,    
  ],
  imports: [
    CommonModule,
    SharedModule,
    MatTabsModule,
    MatGridListModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
  ],
  exports: [
    ProfileComponent
  ]
})
export class ProfileModule { }
