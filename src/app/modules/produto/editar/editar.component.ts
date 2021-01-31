import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Produto } from 'src/app/models/produto.model';
import { Promocao } from 'src/app/models/promocao.model';
import { ProdutoService } from 'src/app/services/produto/produto.service';
import { PromocaoService } from 'src/app/services/promocao/promocao.service';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.scss']
})

export class EditarComponent implements OnInit {
  constructor(private produtoService: ProdutoService, private promocaoService: PromocaoService) { }
  @Input() produto: Produto = {};
  @Output() voltar = new EventEmitter<boolean>();
  promocoes: Promocao[] = [];


  produtoForm: FormGroup = new FormGroup({});

  ngOnInit(): void {
    this.produtoForm = this.produtoService.createFormProduto(this.produto);
    this.promocaoService.listPromocao().subscribe(
      (promos: Promocao[]) => {
        this.promocoes = promos;
      }
    )
  }

  public submit(): void {
    if (this.produtoForm.valid) {
      const produto: Produto = this.produtoService.parseFormProduto(this.produtoForm);

      this.produtoService.putProduto(produto, produto.id || 0).subscribe(
        (prod: Produto) => {
          this.voltarHandler();
        })
    }
  }

  public voltarHandler(): void {
    this.voltar.emit(true);
  }

}
