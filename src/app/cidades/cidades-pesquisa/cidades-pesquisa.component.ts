import { Component, OnInit } from '@angular/core';
import { CidadesService } from '../cidades.service';
import { MessageService, ConfirmationService } from 'primeng/api';

@Component({
  selector: 'app-cidades-pesquisa',
  templateUrl: './cidades-pesquisa.component.html',
  styleUrls: ['./cidades-pesquisa.component.css']
})
export class CidadesPesquisaComponent implements OnInit {

  cidades = [];
  estados = [];

  nomeBusca:string;

  constructor(
    private service:CidadesService,
    private msg:MessageService,
    private conf: ConfirmationService
  ) { }

  pesquisar(){
    this.service.pesquisar({nome:this.nomeBusca})
    .then((dados)=>{
      this.cidades=dados;
    });
  }


  pesquisarEstados(){
    this.service.listarUf()
    .then((dados)=>{
      this.estados=dados
      .map(e => ({ label: e.nome, value: e.id }));
    });
  }

  ngOnInit() {
    this.pesquisar();
  }

  confirmarExclusao(cidade:any){
    this.conf.confirm({
      message: 'Tem certeza que deseja excluir '+cidade.nome+'?',
      accept: () => {
        this.excluir(cidade);
      }
    });
  }

  excluir(cidade: any){
    this.service.excluir(cidade.id)
    .then(()=>{
      this.pesquisar();
      this.msg.add({severity:'success', summary:'Exclusão', detail:'cidade '+cidade.nome+' excluída'});
    });
  }

}
