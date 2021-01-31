import { Injectable } from '@angular/core';
import { ApiService } from '../api/api.service';
import * as urls from '../../../assets/url.json';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  constructor(private apiService: ApiService) { }

  public getProduto(id: number) {
  }

  public listProduto() {
    return this.apiService.get(urls.PRODUTO);
  }

}
