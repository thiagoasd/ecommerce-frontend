import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CarrinhoService } from 'src/app/services/carrinho/carrinho.service';
import { ProdutoComponent } from '../../produto/produto.component';

import { LojaProdutoComponent } from './produto.component';

describe('ProdutoComponent', () => {
  let component: LojaProdutoComponent;
  let carrinhoService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProdutoComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    carrinhoService = jasmine.createSpyObj('CarrinhoService', ['adicionar']);
    carrinhoService.adicionar.and.callFake(() => null);

    component = new LojaProdutoComponent(carrinhoService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should ngOnInit', () => {
    expect(() => component.ngOnInit()).not.toThrow();
  });

  it('should quantidadeChange', () => {
    component.quantidadeChange({ target: { valueAsNumber: 50 } });
    expect(component.quantidade).toBeLessThanOrEqual(50);
  });

  it('should adicionarCarrinho', () => {
    component.produto = { nome: "teste", valor: 1 };
    component.quantidade = 5;
    expect(() => component.adicionarCarrinho()).not.toThrow();
  });

});
