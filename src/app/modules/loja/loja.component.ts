import { Component, OnInit } from '@angular/core';
import { Produto } from 'src/app/models/produto.model';
import { ProdutoService } from 'src/app/services/produto/produto.service';

@Component({
  selector: 'app-loja',
  templateUrl: './loja.component.html',
  styleUrls: ['./loja.component.scss']
})
export class LojaComponent implements OnInit {

  constructor() { }

  produto: Produto = { nome: '', valor: 0};
  tabelaPage: boolean = true;
  produtoPage: boolean = false;

  ngOnInit(): void {
  }

  public resetarPages() {
    this.tabelaPage = false;
    this.produtoPage = false;
  }

  public openTabela() {
    this.resetarPages();
    this.tabelaPage = true;
  }
  public openProduto(produto: Produto) {
    this.resetarPages();
    this.produtoPage = true;
    this.produto = produto;
  }

}
