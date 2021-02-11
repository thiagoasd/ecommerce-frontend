import { Injectable } from '@angular/core';
import { ApiService } from '../api/api.service';
import * as urls from '../../../assets/url.json';
import { Produto } from 'src/app/models/produto.model';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  constructor(private apiService: ApiService) { }

  public getProduto(id: number): Observable<Produto> {
    return this.apiService.getWithId(urls.PRODUTO, id);
  }

  public listProduto(): Observable<Produto[]> {
    return this.apiService.get(urls.PRODUTO);
  }

  public postProduto(payload: Produto): Observable<Produto> {
    return this.apiService.post(urls.PRODUTO, payload);
  }

  public putProduto(payload: Produto, id: number): Observable<Produto> {
    return this.apiService.put(urls.PRODUTO, id, payload);
  }

  public deleteProduto(payload: Produto, id: number): Observable<Produto> {
    return this.apiService.delete(urls.PRODUTO, id, payload);
  }

  public parseFormProduto(form: FormGroup): Produto {
    return {
      nome: form.get('nome')?.value,
      valor: form.get('valor')?.value,
      id: form.get('id')?.value,
      promocao: form.get('promocao')?.value,
    };
  }

  public createFormProduto(produto: Produto): FormGroup {
    let form: FormGroup = new FormGroup({
      nome: new FormControl(produto.nome, Validators.required),
      valor: new FormControl(produto.valor, [Validators.required, Validators.min(0)]),
      id: new FormControl(produto.id, [Validators.required, Validators.min(0)]),
      promocao: new FormControl(produto.promocao)
    })
    return form;
  };

}
