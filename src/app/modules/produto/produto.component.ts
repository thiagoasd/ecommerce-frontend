import { Component, OnInit } from '@angular/core';
import { Produto } from 'src/app/models/produto.model';
import { ProdutoService } from 'src/app/services/produto/produto.service';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.scss']
})
export class ProdutoComponent implements OnInit {

  headers = ["ID", "Nome", "Valor"];
  rows: Array<Produto> = []

  constructor(private produtoService: ProdutoService) { }

  ngOnInit(): void {
    this.produtoService.listProduto().subscribe(
      (response: Array<Produto>) => {
        this.rows = response;
      })
  }



}
