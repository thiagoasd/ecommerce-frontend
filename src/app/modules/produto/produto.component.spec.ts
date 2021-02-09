import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Produto } from 'src/app/models/produto.model';

import { ProdutoComponent } from './produto.component';

describe('ProdutoComponent', () => {
  let component: ProdutoComponent;
  let produto: Produto = {nome: "Teste", valor: 5};

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProdutoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    component = new ProdutoComponent();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should ngOnInit', () => {
    expect(() => component.ngOnInit()).not.toThrow();
  });

  it('should openCriar', () => {

    component.openCriar();
    expect(component.listarPage).toBeFalse();
    expect(component.produtoPage).toBeTrue();
    expect(component.editarPage).toBeFalse();
    expect(component.deletarPage).toBeFalse();
  });

  it('should openListar', () => {

    component.openListar();
    expect(component.listarPage).toBeTrue();
    expect(component.produtoPage).toBeFalse();
    expect(component.editarPage).toBeFalse();
    expect(component.deletarPage).toBeFalse();
  });

  it('should openEditar', () => {

    component.openEditar(produto);
    expect(component.listarPage).toBeFalse();
    expect(component.produtoPage).toBeFalse();
    expect(component.editarPage).toBeTrue();
    expect(component.deletarPage).toBeFalse();
  });

  it('should openDeletar', () => {

    component.openDeletar(produto);
    expect(component.listarPage).toBeFalse();
    expect(component.produtoPage).toBeFalse();
    expect(component.editarPage).toBeFalse();
    expect(component.deletarPage).toBeTrue();
  });

  it('should resetarPages', () => {

    component.resetarPages();
    expect(component.listarPage).toBeFalse();
    expect(component.produtoPage).toBeFalse();
    expect(component.editarPage).toBeFalse();
    expect(component.deletarPage).toBeFalse();
  });


});
