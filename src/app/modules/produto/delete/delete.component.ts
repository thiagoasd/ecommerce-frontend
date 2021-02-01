import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Produto } from 'src/app/models/produto.model';
import { ProdutoService } from 'src/app/services/produto/produto.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.scss']
})
export class DeleteComponent implements OnInit {
  constructor(private produtoService: ProdutoService) { }
  @Input() produto: Produto = { nome: '', valor: 0};
  @Output() voltar = new EventEmitter<boolean>();


  produtoForm: FormGroup = new FormGroup({});

  ngOnInit(): void {
    this.produtoForm = this.produtoService.createFormProduto(this.produto);
  }

  public submit(): void {

    this.produtoService.deleteProduto(this.produto, this.produto.id || 0).subscribe(
      (prod: Produto) => {
        this.voltarHandler();
      })
  }


  public voltarHandler(): void {
    this.voltar.emit(true);
  }

}
