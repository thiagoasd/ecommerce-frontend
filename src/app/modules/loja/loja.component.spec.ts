import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LojaComponent } from './loja.component';

describe('LojaComponent', () => {
  let component: LojaComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LojaComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    component = new LojaComponent();

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should ngOnInit', () => {
    expect(() => component.ngOnInit()).not.toThrow();
  });

  it('should resetarPages', () => {

    component.resetarPages();
    expect(component.tabelaPage).toBeFalse();
    expect(component.produtoPage).toBeFalse();
  });

  it('should resetarPages', () => {

    component.openTabela();
    expect(component.tabelaPage).toBeTrue();
    expect(component.produtoPage).toBeFalse();
  });

  it('should resetarPages', () => {

    component.openProduto({ nome: "teste", valor: 50 });
    expect(component.tabelaPage).toBeFalse();
    expect(component.produtoPage).toBeTrue();
  });

});
