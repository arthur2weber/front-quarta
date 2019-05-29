import { CidadesService } from './cidades.service';
import { CidadesPesquisaComponent } from './cidades-pesquisa/cidades-pesquisa.component';
import { CidadesCadastroComponent } from './cidades-cadastro/cidades-cadastro.component';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { TooltipModule } from 'primeng/tooltip';
import { TableModule } from 'primeng/table';
import { MessageService } from 'primeng/api';
import { ConfirmDialogModule } from 'primeng/confirmdialog';

import { DropdownModule } from 'primeng/dropdown';

@NgModule({
  declarations: [CidadesPesquisaComponent, CidadesCadastroComponent],
  imports: [
    CommonModule,
    InputTextModule,
    ButtonModule,
    TooltipModule,
    TableModule,
    ToastModule,
    FormsModule,
    ConfirmDialogModule,
    RouterModule,
  DropdownModule,

],
  exports:[
	CidadesPesquisaComponent,
    CidadesCadastroComponent
  ],
  providers: [
    CidadesService,
    MessageService
  ]
})
export class CidadesModule { }
