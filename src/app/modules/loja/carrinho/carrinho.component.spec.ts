import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of, Subject } from 'rxjs';
import { Produto } from 'src/app/models/produto.model';
import { ProdutoCarrinho } from 'src/app/models/produtoCarrinho.model';
import * as promocoes from '../../../enums/promocoes.enum.json';

import { CarrinhoComponent } from './carrinho.component';

describe('CarrinhoComponent', () => {
  let component: CarrinhoComponent;
  let carrinhoService;
  let produtoStub: ProdutoCarrinho = { produto: { nome: 'teste', valor: 5 }, quantidade: 1 };
  let promocaoACADAStub = {
    nome: "3 por 10",
    valor: 10,
    tipo: promocoes.A_CADA,
    info_adicional: "3",
    info_adicional2: '',
    id: 1,
  }

  let promocaoLEVEPAGAStub = {
    nome: "leve 3 pague 1",
    valor: 5,
    tipo: promocoes.LEVE_PAGA,
    info_adicional: "3",
    info_adicional2: '1',
    id: 1,
  }

  let produtoComPromoStub: ProdutoCarrinho = {
    ...produtoStub,
    quantidade: 3
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CarrinhoComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    carrinhoService = jasmine.createSpyObj('CarrinhoService', ['adicionar']);
    carrinhoService.adicionar.and.callFake(() => of());
    carrinhoService.carrinhoDispatcher = new Subject<ProdutoCarrinho>();
    component = new CarrinhoComponent(carrinhoService);

    produtoStub = { produto: { nome: 'teste', valor: 5 }, quantidade: 1 };
    promocaoACADAStub = {
      nome: "3 por 10",
      valor: 10,
      tipo: promocoes.A_CADA,
      info_adicional: "3",
      info_adicional2: '',
      id: 1,
    }
  
    promocaoLEVEPAGAStub = {
      nome: "leve 3 pague 1",
      valor: 5,
      tipo: promocoes.LEVE_PAGA,
      info_adicional: "3",
      info_adicional2: '1',
      id: 1,
    }
  
    produtoComPromoStub = {
      ...produtoStub,
      quantidade: 3
    };

  });

  it('should ngInit', () => {
    expect(component.ngOnInit()).not.toThrow;
  });

  it('should addCarrinho', () => {
    component.addCarrinho(produtoStub);
    component.refreshCarrinho();
    expect(component.total).toBeGreaterThanOrEqual(5);
  });

  it('should addCarrinho existente', () => {
    component.addCarrinho(produtoStub);
    component.addCarrinho(produtoStub);
    component.addCarrinho(produtoStub);
    component.refreshCarrinho();
    expect(component.total).toBeGreaterThanOrEqual(15);
  });

  it('should removeCarrinho', () => {
    component.addCarrinho(produtoStub);
    component.removeCarrinho(produtoStub);
    expect(component.total).toBeLessThanOrEqual(0);
  });

  it('should analisarPreco', () => {
    let stub = produtoStub;
    component.addCarrinho(stub);
    component.refreshCarrinho();
    expect(component.total).toBeLessThanOrEqual(5);
  });

  it('should analisarPreco ACADA', () => {
    let stub = produtoComPromoStub;
    stub.produto.promocao = promocaoACADAStub;
    component.addCarrinho(stub);
    component.refreshCarrinho();
    expect(component.total).toBeLessThanOrEqual(10);
  });

  it('should analisarPreco LEVEPAGA', () => {
    let stub = produtoComPromoStub;
    stub.produto.promocao = promocaoLEVEPAGAStub;
    component.addCarrinho(stub);
    component.refreshCarrinho();
    expect(component.total).toBeLessThanOrEqual(5);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should finalizar', () => {
    expect(component.finalizar()).not.toThrow;
  });
});
