import { EstadosService } from './estados.service';
import { EstadosPesquisaComponent } from "./estados-pesquisa/estados-pesquisa.component";
import { EstadosCadastroComponent } from './estados-cadastro/estados-cadastro.component';

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


@NgModule({
  declarations: [EstadosPesquisaComponent, EstadosCadastroComponent],
  imports: [
    CommonModule,
    InputTextModule,
    ButtonModule,
    TooltipModule,
    TableModule,
    ToastModule,
    FormsModule,
    ConfirmDialogModule,
    RouterModule
  ],
  exports:[
    EstadosPesquisaComponent,
    EstadosCadastroComponent
  ],
  providers: [
    EstadosService,
    MessageService
  ]
})
export class EstadosModule { }
