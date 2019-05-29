import { Cidade, Estado } from './model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CidadesService {

  cidadesURL = 'http://localhost:8080/cidades';
  urlFiltro;

  constructor(private http: HttpClient) { }

  pesquisar(filtro: any): Promise<any> {
    this.urlFiltro = this.cidadesURL;
	if(filtro.nome){
      this.urlFiltro += '/filtro?nome='+filtro.nome;
    }

    return this.http.get<any>(this.urlFiltro).toPromise();
  }

  listarUf(): Promise<any> {
    return this.http.get<any>('http://localhost:8080/estados').toPromise();
  }

  excluir(id:number):Promise<void>{
    return this.http.delete(this.cidadesURL+'/'+id)
    .toPromise()
    .then(() => null);
  }

  adicionar(cidade: Cidade): Promise<any>{
    return this.http.post(this.cidadesURL, cidade)
    .toPromise();
  }

  alterar(cidade: Cidade): Promise<any>{
    return this.http.put(this.cidadesURL+'/'+cidade.id, cidade)
    .toPromise();
  }

  buscarPorCodigo(codigo: number): Promise<Cidade> {
    return this.http.get<Cidade>(this.cidadesURL+'/'+codigo).toPromise();
  }

}
