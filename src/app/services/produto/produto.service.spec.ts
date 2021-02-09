import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { of } from 'rxjs';
import { Produto } from 'src/app/models/produto.model';

import { ProdutoService } from './produto.service';

describe('ProdutoService', () => {
  let service: ProdutoService;
  let httpClient;
  let produtoStub: Produto = { nome: 'teste', valor: 5 };
  let formStub: FormGroup = new FormGroup({
    nome: new FormControl('', Validators.required),
    valor: new FormControl('', [Validators.required, Validators.min(0)]),
    promocao: new FormControl('')
  });

  beforeEach(() => {
    TestBed.configureTestingModule({providers: [HttpClient]});
    httpClient = jasmine.createSpyObj('httpClient', ['get', 'put', 'post', 'delete', 'getWithId']);
    httpClient.get.and.callFake(() => of());
    httpClient.getWithId.and.callFake(() => of());
    httpClient.put.and.callFake(() => of());
    httpClient.post.and.callFake(() => of());
    httpClient.delete.and.callFake(() => of());
    service = new ProdutoService(httpClient);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get', () => {
    expect(service.getProduto(5)).not.toThrow;
  });

  it('should list', () => {
    expect(service.listProduto()).not.toThrow;
  });

  it('should post', () => {
    expect(service.postProduto(produtoStub)).not.toThrow;
  });

  it('should put', () => {
    expect(service.putProduto(produtoStub, 1)).not.toThrow;
  });

  it('should delete', () => {
    expect(service.deleteProduto(produtoStub, 1)).not.toThrow;
  });

  it('should parseFormProduto', () => {
    expect(service.parseFormProduto(formStub)).not.toThrow;
  });

  it('should createFormProduto', () => {
    expect(service.createFormProduto(produtoStub)).not.toThrow;
  });
  
});
