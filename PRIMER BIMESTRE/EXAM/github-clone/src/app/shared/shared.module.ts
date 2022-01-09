import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { HttpClientModule } from '@angular/common/http';
import {MatIconModule} from '@angular/material/icon';
import { CoreModule } from '../core/core.module';


@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    HttpClientModule,
    AngularSvgIconModule.forRoot(),
    MatIconModule,
    CoreModule,
  ],
  exports: [
    NavbarComponent,
    FooterComponent,
  ]
})
export class SharedModule { }
