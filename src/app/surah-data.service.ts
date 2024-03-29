import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SurahDataService {

  constructor(private _HttpClient: HttpClient) { }

  getAyahData(AyahNumber:number): Observable<any> {
    return this._HttpClient.get(`https://api.alquran.cloud/v1/surah/${AyahNumber}/ar.alafasy`)
  }
}
