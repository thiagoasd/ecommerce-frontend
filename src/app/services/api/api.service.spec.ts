import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { ApiService } from './api.service';

describe('ApiService', () => {
  let service: ApiService;
  let httpClient;

  beforeEach(() => {
    TestBed.configureTestingModule({providers: [HttpClient]});
    httpClient = jasmine.createSpyObj('httpClient', ['get', 'put', 'post', 'delete']);
    httpClient.get.and.callFake(() => of());
    httpClient.put.and.callFake(() => of());
    httpClient.post.and.callFake(() => of());
    httpClient.delete.and.callFake(() => of());
    service = service = new ApiService(httpClient);
  });

  it('should getWithId', () => {
    expect(service.getWithId('', 5)).not.toThrow;
  });

  it('should get', () => {
    expect(service.get('')).not.toThrow;
  });

  it('should post', () => {
    expect(service.post('', 'payload')).not.toThrow;
  });

  it('should put', () => {
    expect(service.put('', 5, 'payload')).not.toThrow;
  });

  it('should delete', () => {
    expect(service.delete('', 5, 'payload')).not.toThrow;
  });
});
