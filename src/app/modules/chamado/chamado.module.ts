import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { NovoChamadoComponent } from './novo-chamado/novo-chamado.component';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule
  ],
  declarations: [NovoChamadoComponent],
  exports: [NovoChamadoComponent]
})
export class ChamadoModule { }
