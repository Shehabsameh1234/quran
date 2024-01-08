import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class JuzDataService {

  constructor(private _HttpClient:HttpClient ) { }

  getJuzData(juzNumber:number): Observable<any>{
return this._HttpClient.get(`https://api.alquran.cloud/v1/juz/${juzNumber}/ar.asad`)
  }
}
