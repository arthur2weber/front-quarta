import { CidadesModule } from './cidades/cidades.module';
import { CidadesCadastroComponent } from './cidades/cidades-cadastro/cidades-cadastro.component';
import { CidadesPesquisaComponent } from './cidades/cidades-pesquisa/cidades-pesquisa.component';

import { EstadosModule } from './estados/estados.module';
import { EstadosCadastroComponent } from './estados/estados-cadastro/estados-cadastro.component';
import { EstadosPesquisaComponent } from "./estados/estados-pesquisa/estados-pesquisa.component";

import { CategoriasModule } from './categorias/categorias.module';
import { CategoriasCadastroComponent } from './categorias/categorias-cadastro/categorias-cadastro.component';
import { CategoriasPesquisaComponent } from './categorias/categorias-pesquisa/categorias-pesquisa.component';


import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';

import { ButtonModule } from 'primeng/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { ConfirmationService } from 'primeng/api';
import { SidebarModule } from 'primeng/sidebar';


const rotas: Routes = [
  {path: '', redirectTo:'categorias', pathMatch:'full'},

  {path: 'cidades', component: CidadesPesquisaComponent},
  {path: 'cidades/novo', component: CidadesCadastroComponent},
  {path: 'cidades/:id', component: CidadesCadastroComponent},

  {path: 'estados', component: EstadosPesquisaComponent},
  {path: 'estados/novo', component: EstadosCadastroComponent},
  {path: 'estados/:id', component: EstadosCadastroComponent},

  {path: 'categorias', component: CategoriasPesquisaComponent},
  {path: 'categorias/novo', component: CategoriasCadastroComponent},
  {path: 'categorias/:id', component: CategoriasCadastroComponent}
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    SidebarModule,
    ButtonModule,
    RouterModule.forRoot(rotas),
	CategoriasModule,
    CidadesModule,
	EstadosModule,
  ],
  providers: [
    ConfirmationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
