import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponentComponent } from './table-component/table-component.component';
import { AppModule } from '../app.module';
import { MarcasPageComponent } from './marcas-page/marcas-page.component';
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
import { CelularesModule } from '../celulares/celulares.module';


@NgModule({
  declarations: [
    TableComponentComponent,
    MarcasPageComponent,

  ],
  imports: [
    CommonModule,
    AppModule,
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
    CelularesModule //REVISAR
    //BrowserModule,
    //BrowserAnimationsModule
  ]
})
export class MarcasModule { }
