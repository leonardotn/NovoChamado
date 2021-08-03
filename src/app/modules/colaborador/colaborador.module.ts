import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NovoColaboradorComponent } from './novo-colaborador/novo-colaborador.component';
import {RadioButtonModule} from 'primeng/radiobutton';
import {InputNumberModule} from 'primeng/inputnumber';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {DialogModule} from 'primeng/dialog';
import {DropdownModule} from 'primeng/dropdown';
import {RatingModule} from 'primeng/rating';
import {ToastModule} from 'primeng/toast';
import {ListaColaboradorComponent} from './lista-colaborador/lista-colaborador.component';
import {CheckboxModule} from 'primeng/checkbox';
import {TableModule} from 'primeng/table';
import {ToolbarModule} from 'primeng/toolbar';
import {FileUploadModule} from 'primeng/fileupload';
import {InputTextModule} from 'primeng/inputtext';


@NgModule({
  imports: [
    CommonModule,
    RadioButtonModule,
    InputNumberModule,
    ConfirmDialogModule,
    DialogModule,
    DropdownModule,
    RatingModule,
    ToastModule,
    CheckboxModule,
    TableModule,
    ToolbarModule,
    FileUploadModule,
    InputTextModule
  ],
  declarations: [NovoColaboradorComponent, ListaColaboradorComponent],
  exports: [NovoColaboradorComponent, ListaColaboradorComponent]
})
export class ColaboradorModule { }
