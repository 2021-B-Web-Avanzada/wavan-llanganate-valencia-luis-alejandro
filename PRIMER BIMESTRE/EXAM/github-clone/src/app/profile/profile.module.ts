import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './page/profile.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    ProfileComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
  ],
  exports:[
    ProfileComponent
  ]
})
export class ProfileModule { }
