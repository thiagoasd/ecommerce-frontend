import { TestBed } from '@angular/core/testing';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { of } from 'rxjs';
import { Produto } from 'src/app/models/produto.model';
import { ProdutoService } from 'src/app/services/produto/produto.service';
import * as promocoes from '../../../enums/promocoes.enum.json';

import { EditarComponent } from './editar.component';

describe('EditarComponent', () => {
  let component: EditarComponent;
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
  let formStub: FormGroup = new FormGroup({
    nome: new FormControl('', Validators.required),
    valor: new FormControl('', [Validators.required, Validators.min(0)]),
    promocao: new FormControl('')
  });

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    promocaoService = jasmine.createSpyObj('PromocaoService', ['listPromocao']);
    promocaoService.listPromocao.and.callFake(() => of(promocoesStub));
    produtoService = jasmine.createSpyObj('ProdutoService', ['parseFormProduto', 'putProduto', 'createFormProduto']);
    produtoService.parseFormProduto.and.callFake(() => of(produtoStub));
    produtoService.putProduto.and.callFake(() => of(produtoStub));
    produtoService.createFormProduto.and.callFake(() => of(formStub));
    component = new EditarComponent(produtoService, promocaoService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should ngOnInit', () => {
    expect(() => component.ngOnInit()).not.toThrow();
  });

  it('should submit', () => {
    expect(() => component.submit()).not.toThrow();
  });
});
