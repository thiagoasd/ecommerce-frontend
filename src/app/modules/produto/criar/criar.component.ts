import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Produto } from 'src/app/models/produto.model';
import { Promocao } from 'src/app/models/promocao.model';
import { ProdutoService } from 'src/app/services/produto/produto.service';
import { PromocaoService } from 'src/app/services/promocao/promocao.service';

@Component({
  selector: 'app-criar',
  templateUrl: './criar.component.html',
  styleUrls: ['./criar.component.scss']
})
export class CriarComponent implements OnInit {
  constructor(private promocaoService: PromocaoService, private produtoService: ProdutoService) { }

  @Output() voltar = new EventEmitter<boolean>();
  promocoes: Promocao[] = [];

  produtoForm = new FormGroup({
    nome: new FormControl('', Validators.required),
    valor: new FormControl('', [Validators.required, Validators.min(0)]),
    promocao: new FormControl('')
  });

  ngOnInit(): void {
    this.promocaoService.listPromocao().subscribe(
      (promos: Promocao[]) => {
        this.promocoes = promos;
      }
    )

  }

  public submit(): void {
    if (this.produtoForm.valid) {

      if (this.produtoForm.get('promocao')?.value === "") {
        this.produtoForm.get('promocao')?.setValue(undefined);
      }

      const produto: Produto = this.produtoService.parseFormProduto(this.produtoForm);

      this.produtoService.postProduto(produto).subscribe(
        (prod: Produto) => {
          this.voltarHandler();
        })
    }
  }

  public voltarHandler(): void {
    this.voltar.emit(true);
  }

}
