import { Injectable  } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class GetAyahService {
  



  constructor(private _HttpClient:HttpClient ) { }

  getAyah(surahNumber:number,ayahNumber:number): Observable<any> {
    return this._HttpClient.get(`https://api.alquran.cloud/v1/ayah/${surahNumber}:${ayahNumber}/ar.asad`)
  }
}
