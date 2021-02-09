import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { Produto } from 'src/app/models/produto.model';

import { TabelaComponent } from './tabela.component';

describe('TabelaComponent', () => {
  let component: TabelaComponent;
  let produtoService;
  let listaProdutosStub: Produto[] = [{nome: "teste", valor: 1}, {nome: "teste 2", valor: 2}];
  let produto: Produto = {nome: "teste", valor: 1};

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabelaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    produtoService = jasmine.createSpyObj('ProdutoService', ['listProduto']);
    produtoService.listProduto.and.callFake(() => of(listaProdutosStub));
    component = new TabelaComponent(produtoService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should ngOnInit', () => {
    expect(() => component.ngOnInit()).not.toThrow();
  });

  it('should openProduto', () => {
    expect(() => component.openProduto(produto)).not.toThrow();
  });
});
