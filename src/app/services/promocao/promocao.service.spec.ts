import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { PromocaoService } from './promocao.service';

describe('PromocaoService', () => {
  let service: PromocaoService;
  let httpClient;

  beforeEach(() => {
    TestBed.configureTestingModule({providers: [HttpClient]});
    httpClient = jasmine.createSpyObj('httpClient', ['get', 'put', 'post', 'delete']);
    httpClient.get.and.callFake(() => of());
    service = new PromocaoService(httpClient);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should be created', () => {
    expect(service.listPromocao()).not.toThrow;
  });
});
