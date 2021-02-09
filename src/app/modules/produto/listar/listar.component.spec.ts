import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { Produto } from 'src/app/models/produto.model';

import { ListarComponent } from './listar.component';

describe('ListarComponent', () => {
  let component: ListarComponent;
  let produtoService;
  let listaProdutosStub: Produto[] = [{nome: "teste", valor: 1}, {nome: "teste 2", valor: 2}];
  let produtoStub: Produto = {nome: "Teste", valor: 5};

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    produtoService = jasmine.createSpyObj('ProdutoService', ['listProduto']);
    produtoService.listProduto.and.callFake(() => of(listaProdutosStub));
    component = new ListarComponent(produtoService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should ngOnInit', () => {
    expect(() => component.ngOnInit()).not.toThrow();
  });

  it('should editProduto', () => {
    expect(() => component.edit(produtoStub)).not.toThrow();
  });

  it('should deleteProduto', () => {
    expect(() => component.delete(produtoStub)).not.toThrow();
  });
});
