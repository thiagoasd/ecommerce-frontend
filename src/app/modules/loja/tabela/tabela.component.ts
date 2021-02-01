import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Produto } from 'src/app/models/produto.model';
import { ProdutoService } from 'src/app/services/produto/produto.service';

@Component({
  selector: 'app-tabela',
  templateUrl: './tabela.component.html',
  styleUrls: ['./tabela.component.scss']
})
export class TabelaComponent implements OnInit {

  constructor(private produtoService: ProdutoService) { }
  @Output() selectProduto = new EventEmitter<Produto>();
  rows: Array<Produto> = []

  ngOnInit(): void {
    this.produtoService.listProduto().subscribe(
      (response: Array<Produto>) => {
        this.rows = response;
      })
  }

  public openProduto(produto: Produto) {
    this.selectProduto.emit(produto);
  }

}