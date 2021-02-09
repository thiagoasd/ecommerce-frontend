import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { of } from 'rxjs';
import { Produto } from 'src/app/models/produto.model';

import { DeleteComponent } from './delete.component';

describe('DeleteComponent', () => {
  let component: DeleteComponent;
  let produtoService;
  let produtoStub: Produto = { nome: "Teste", valor: 5 };
  let formStub: FormGroup = new FormGroup({
    nome: new FormControl('', Validators.required),
    valor: new FormControl('', [Validators.required, Validators.min(0)]),
    promocao: new FormControl('')
  });

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DeleteComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    produtoService = jasmine.createSpyObj('ProdutoService', ['deleteProduto', 'createFormProduto', 'parseFormProduto']);
    produtoService.deleteProduto.and.callFake(() => of(produtoStub));
    produtoService.createFormProduto.and.callFake(() => of(formStub));
    produtoService.parseFormProduto.and.callFake(() => of(produtoStub));
    component = new DeleteComponent(produtoService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should submit', () => {
    expect(() => component.submit()).not.toThrow();
  });

  it('should ngOnInit', () => {
    expect(() => component.ngOnInit()).not.toThrow();
  });
});
