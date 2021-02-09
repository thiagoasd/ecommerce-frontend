import { TestBed } from '@angular/core/testing';
import { ProdutoCarrinho } from 'src/app/models/produtoCarrinho.model';
import { CarrinhoService } from './carrinho.service';

describe('CarrinhoService', () => {
  let service: CarrinhoService;
  let produtoStub: ProdutoCarrinho = { produto: { nome: 'teste', valor: 5 }, quantidade: 1 };

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CarrinhoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should adicionar', () => {
    expect(service.adicionar(produtoStub)).not.toThrow;
  });
});
