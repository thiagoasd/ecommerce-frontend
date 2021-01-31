import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Promocao } from 'src/app/models/promocao.model';
import { ApiService } from '../api/api.service';
import * as urls from '../../../assets/url.json';

@Injectable({
  providedIn: 'root'
})
export class PromocaoService {

  constructor(private apiService: ApiService) { }

  public listPromocao(): Observable<Promocao[]> {
    return this.apiService.get(urls.PROMOCAO);
  }
}
