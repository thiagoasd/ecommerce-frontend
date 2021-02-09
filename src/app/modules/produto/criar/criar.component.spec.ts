import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { Produto } from 'src/app/models/produto.model';
import * as promocoes from '../../../enums/promocoes.enum.json';

import { CriarComponent } from './criar.component';

describe('CriarComponent', () => {
  let component: CriarComponent;
  let promocaoService;
  let produtoService;
  let promocoesStub = [
    {
    nome: "3 por 10",
    valor: 10,
    tipo: promocoes.A_CADA,
    info_adicional: "3",
    info_adicional2: '',
    id: 1,
  },
  {
    nome: "3 por 10",
    valor: 10,
    tipo: promocoes.A_CADA,
    info_adicional: "3",
    info_adicional2: '',
    id: 2,
  }];
  let produtoStub: Produto = {nome: "Teste", valor: 5};


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CriarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    promocaoService = jasmine.createSpyObj('PromocaoService', ['listPromocao']);
    promocaoService.listPromocao.and.callFake(() => of(promocoesStub));
    produtoService = jasmine.createSpyObj('ProdutoService', ['parseFormProduto', 'postProduto']);
    produtoService.parseFormProduto.and.callFake(() => of(produtoStub));
    produtoService.postProduto.and.callFake(() => of(produtoStub));
    
    component = new CriarComponent(promocaoService, produtoService);

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should submit', () => {
    component.produtoForm.controls['nome'].setValue("teste");
    component.produtoForm.controls['valor'].setValue(5);
        expect(() => component.submit()).not.toThrow();
  });

  it('should ngOnInit', () => {
    expect(() => component.ngOnInit()).not.toThrow();
  });
});
