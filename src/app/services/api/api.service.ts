import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import * as urls from '../../../assets/url.json';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  urlBase: string = urls.SERVER;

  public getWithId(url: string, id: number): Observable<any> {
    const urlWithId = `${this.urlBase}/${url}/${id}`;
    return this.http.get<any>(urlWithId);
  }

  public get(url: string): Observable<any> {
    const urlList = `${this.urlBase}/${url}`;
    return this.http.get<any>(urlList);
  }


}
