import { Component, OnInit } from '@angular/core';
import { Produto } from 'src/app/models/produto.model';
import { ProdutoCarrinho } from 'src/app/models/produtoCarrinho.model';
import { CarrinhoService } from 'src/app/services/carrinho/carrinho.service';
import * as promocoes from '../../../enums/promocoes.enum.json';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.scss']
})
export class CarrinhoComponent implements OnInit {

  constructor(private carrinhoService: CarrinhoService) { }
  carrinho: ProdutoCarrinho[] = [];
  total: number = 0;

  ngOnInit(): void {
    this.carrinhoService.carrinhoDispatcher.subscribe(
      (produto: ProdutoCarrinho) => {
        this.addCarrinho(produto);
        this.refreshCarrinho();

      }
    )
  }

  public refreshCarrinho() {
    let total: number = 0;
    this.carrinho.forEach(pedido => {
      this.analisarPreco(pedido);
      total += pedido.valor || 0;
    });

    this.total = total;
  }

  public addCarrinho(pedido: ProdutoCarrinho): void {
    let repetido: boolean = false;
    this.carrinho.forEach(item => {

      if (item.produto.id === pedido.produto.id) {
        item.quantidade += pedido.quantidade;
        repetido = true;
      }
    });

    if (!repetido) {
      this.carrinho.push(pedido);
    }
  }

  public removeCarrinho(pedido: ProdutoCarrinho): void {
    this.carrinho = this.carrinho.filter(obj => obj.produto.id !== pedido.produto.id);
  }

  public analisarPreco(pedido: ProdutoCarrinho): void {
    let total: number = 0;

    if (pedido.produto.promocao) {
      switch (pedido.produto.promocao.tipo) {
        case promocoes.A_CADA:
          pedido.valor = this.calcular_a_cada(pedido);
          break;

        case promocoes.LEVE_PAGA:
          pedido.valor = this.calcular_leve_pague(pedido);
          break;
      }
    } else {
      pedido.valor = pedido.quantidade * pedido.produto.valor;
    }

  }

  public calcular_a_cada(pedido: ProdutoCarrinho): number {
    let quantidade = pedido.quantidade;
    let valor_promo = pedido.produto.promocao?.valor || 0;
    let valor_unitario = pedido.produto.valor || 0;
    let a_cada = 0;

    if (pedido.produto?.promocao?.info_adicional) {
      a_cada = parseInt(pedido.produto?.promocao.info_adicional || "0");
    }

    let qnt_promos = Math.floor(quantidade / a_cada);
    let sobra = pedido.quantidade % a_cada;


    return (qnt_promos * valor_promo) + (sobra * valor_unitario);

  }

  public calcular_leve_pague(pedido: ProdutoCarrinho): number {
    let quantidade = pedido.quantidade;
    let valor_unitario = pedido.produto.valor || 0;
    let leve = parseInt(pedido.produto.promocao?.info_adicional || "0");
    let pague = parseInt(pedido.produto.promocao?.info_adicional2 || "0");

    let qnt_promos = Math.floor(quantidade / leve);
    let sobra = pedido.quantidade % leve;


    return (qnt_promos * pague * pedido.produto.valor) + (sobra * valor_unitario);

  }

  public finalizar(): void {
    this.carrinho = [];
    this.total = 0;
    alert("pedido finalizado");
  }

}
