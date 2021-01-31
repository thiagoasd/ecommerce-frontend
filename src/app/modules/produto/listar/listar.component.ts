import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Produto } from 'src/app/models/produto.model';
import { ProdutoService } from 'src/app/services/produto/produto.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.scss']
})
export class ListarComponent implements OnInit {
  @Output() editar = new EventEmitter<Produto>();
  @Output() deletar = new EventEmitter<Produto>();
  
  rows: Array<Produto> = []

  constructor(private produtoService: ProdutoService) { }

  ngOnInit(): void {
    this.produtoService.listProduto().subscribe(
      (response: Array<Produto>) => {
        this.rows = response;
      })
  }

  public edit(produto: Produto): void {
    this.editar.emit(produto);
  }

  public delete(produto: Produto): void {
    this.deletar.emit(produto);
  }


}

