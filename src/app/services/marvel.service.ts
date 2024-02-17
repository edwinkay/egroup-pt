import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MarvelService {
  private baseUrl = 'https://gateway.marvel.com/v1/public/';
  private publicKey = 'dc1037db3149bfa1aa5df3c8f803155d';
  private privateKey = '65afdaa56094550baf18fec3b062fb6cdf5af8a2';

  constructor(private http: HttpClient) {}

  getCharacters(): Observable<any> {
    const ts = new Date().getTime();
    const hash = this.generateHash(ts);

    let params = new HttpParams();
    params = params.append('ts', ts.toString());
    params = params.append('apikey', this.publicKey);
    params = params.append('hash', hash);

    return this.http.get<any>(`${this.baseUrl}characters`, { params: params });
  }

  getCreators(): Observable<any> {
    const ts = new Date().getTime();
    const hash = this.generateHash(ts);

    let params = new HttpParams();
    params = params.append('ts', ts.toString());
    params = params.append('apikey', this.publicKey);
    params = params.append('hash', hash);

    return this.http.get<any>(`${this.baseUrl}creators`, { params: params });
  }

  getComic(comicId: number): Observable<any> {
    const ts = new Date().getTime();
    const hash = this.generateHash(ts);

    let params = new HttpParams();
    params = params.append('ts', ts.toString());
    params = params.append('apikey', this.publicKey);
    params = params.append('hash', hash);

    return this.http.get<any>(`${this.baseUrl}comics/${comicId}`, {
      params: params,
    });
  }

  private generateHash(timestamp: number): string {
    const md5 = require('md5');
    return md5(timestamp + this.privateKey + this.publicKey);
  }
}
