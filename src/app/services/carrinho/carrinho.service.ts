import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { ProdutoCarrinho } from 'src/app/models/produtoCarrinho.model';

@Injectable({
  providedIn: 'root'
})
export class CarrinhoService {
  carrinhoDispatcher: Subject<ProdutoCarrinho> = new Subject<ProdutoCarrinho>();

  constructor() { }

  adicionar(produto: ProdutoCarrinho) {
    this.carrinhoDispatcher.next(produto);
  }
}
