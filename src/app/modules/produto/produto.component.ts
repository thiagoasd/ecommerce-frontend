import { Component, OnInit } from '@angular/core';
import { Produto } from 'src/app/models/produto.model';
import { ProdutoService } from 'src/app/services/produto/produto.service';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.scss']
})
export class ProdutoComponent implements OnInit {

  listarPage: boolean = true;
  produtoPage: boolean = false;
  editarPage: boolean = false;
  deletarPage: boolean = false;
  produto: Produto = { nome: '', valor: 0};


  constructor(private produtoService: ProdutoService) { }

  ngOnInit(): void {
  }

  public openCriar() {
    this.resetarPages();
    this.produtoPage = true;
  }

  public openListar() {
    this.resetarPages();
    this.listarPage = true;
  }

  public openEditar(produto: Produto) {
    this.resetarPages();
    this.editarPage = true;
    this.produto = produto;
  }

  public openDeletar(produto: Produto) {
    this.resetarPages();
    this.deletarPage = true;
    this.produto = produto;
  }

  public resetarPages() {
    this.listarPage = false;
    this.produtoPage = false;
    this.editarPage = false;
    this.deletarPage = false;
  }


}
