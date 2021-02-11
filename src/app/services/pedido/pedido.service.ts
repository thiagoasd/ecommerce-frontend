import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProdutoCarrinho } from 'src/app/models/produtoCarrinho.model';
import * as urls from '../../../assets/url.json';
import { ApiService } from '../api/api.service';

@Injectable({
  providedIn: 'root'
})
export class PedidoService {

  constructor(private apiService: ApiService) { }

  public postPedido(payload: ProdutoCarrinho[]): Observable<any> {
    let payload2 = { produtos: payload}
    return this.apiService.post(urls.PEDIDO, payload2);
  }

}
