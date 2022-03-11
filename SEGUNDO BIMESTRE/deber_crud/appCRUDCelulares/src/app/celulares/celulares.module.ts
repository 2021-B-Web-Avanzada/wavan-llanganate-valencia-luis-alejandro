import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CelularesPageComponent } from './celulares-page/celulares-page.component';
import { CelularesTableComponent } from './celulares-table/celulares-table.component';
import { TableModule } from 'primeng/table';
import {ToolbarModule} from 'primeng/toolbar';
import {ToastModule} from 'primeng/toast';
import {DialogModule} from 'primeng/dialog';
import {DropdownModule} from 'primeng/dropdown'
import {RadioButtonModule} from 'primeng/radiobutton';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {InputNumberModule} from 'primeng/inputnumber';
import {FileUploadModule} from 'primeng/fileupload'
import {RatingModule} from 'primeng/rating'
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    CelularesPageComponent,
    CelularesTableComponent
  ],
  imports: [
    CommonModule,
    TableModule,
    ToolbarModule,
    ToastModule,
    DialogModule,
    DropdownModule,
    RadioButtonModule,
    ConfirmDialogModule,
    InputNumberModule,
    FileUploadModule,
    RatingModule,
    FormsModule,
  ]
})
export class CelularesModule { }
