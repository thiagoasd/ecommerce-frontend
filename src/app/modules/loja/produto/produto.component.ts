import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Produto } from 'src/app/models/produto.model';
import { CarrinhoService } from 'src/app/services/carrinho/carrinho.service';

@Component({
  selector: 'app-loja-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.scss']
})
export class LojaProdutoComponent implements OnInit {

  constructor(private carrinhoService: CarrinhoService) { }
  @Input() produto: Produto = { nome: '', valor: 0};
  @Output() voltar = new EventEmitter<boolean>();
  quantidade: number = 0;

  ngOnInit(): void {
  }

  public quantidadeChange(event: any){
    this.quantidade = event.target.valueAsNumber;
  }

  public adicionarCarrinho(): void {
    this.carrinhoService.adicionar({ produto: this.produto, quantidade: this.quantidade });
    this.sair();
  }

  public sair(): void {
    this.voltar.next(true);
  }
}
