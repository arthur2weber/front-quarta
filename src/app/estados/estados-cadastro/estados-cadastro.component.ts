import { Estado } from './../model';
import { Component, OnInit } from '@angular/core';
import { EstadosService } from '../estados.service';
import { MessageService } from 'primeng/api';
import { FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-estados-cadastro',
  templateUrl: './estados-cadastro.component.html',
  styleUrls: ['./estados-cadastro.component.css']
})
export class EstadosCadastroComponent implements OnInit {

  estado = new Estado();

  constructor(
    private service: EstadosService,
    private messageService: MessageService,
    private rota: ActivatedRoute,
    //private rotaP: Router
  ) { }

  inserir(form: FormControl) {
    this.service.adicionar(this.estado)
    .then( ()=>{
      this.messageService.add({severity:'success', summary:'Cadastro', detail:'Estado '+this.estado.nome+' cadastrada'});
      form.reset();
    });
  }

  ngOnInit() {
    const codigoEstado = this.rota.snapshot.params['id'];
    if(codigoEstado){
      this.carregarEstado(codigoEstado);
    }
  }

  carregarEstado(id:number){
    this.service.buscarPorCodigo(id)
      .then((data) => {
        this.estado = data;
      }
    );
  }

  alterar(form: FormControl) {
    this.service.alterar(this.estado)
    .then( ()=>{
      this.messageService.add({severity:'success', summary:'Edição', detail:'Estado '+this.estado.nome+' alterada'});
      form.reset();
    });
  }

  salvar(form: FormControl) {
    if(this.editando){
      this.alterar(form);
    }else{
      this.inserir(form);
    }
    //this.rotaP.navigate(['/estados']);
  }

  get editando(){
    return Boolean(this.estado.id);
  }



}
