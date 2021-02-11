import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { ProdutoCarrinho } from 'src/app/models/produtoCarrinho.model';

import { PedidoService } from './pedido.service';

describe('PedidoService', () => {
  let service: PedidoService;
  let httpClient;

  let pedidoStub: ProdutoCarrinho[] = [{
    produto: { nome: 'teste', valor: 5 },
    quantidade: 1
  }]

  beforeEach(() => {
    TestBed.configureTestingModule({});
    httpClient = jasmine.createSpyObj('httpClient', ['get', 'put', 'post', 'delete', 'getWithId']);
    httpClient.get.and.callFake(() => of());
    httpClient.getWithId.and.callFake(() => of());
    httpClient.put.and.callFake(() => of());
    httpClient.post.and.callFake(() => of());
    httpClient.delete.and.callFake(() => of());
    service = new PedidoService(httpClient);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should post', () => {
    expect(service.postPedido(pedidoStub)).not.toThrow;
  });
});
