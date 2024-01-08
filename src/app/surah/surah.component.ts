import { Component } from '@angular/core';
import { GetSurahService } from '../get-surah.service';
import { surahsName } from '../surahname'


@Component({
  selector: 'app-surah',
  templateUrl: './surah.component.html',
  styleUrls: ['./surah.component.scss']
})
export class SurahComponent {

  allSurahsName!: surahsName[]

  constructor(private _GetSurahService: GetSurahService) { }

  ngOnInit(): void {
    this._GetSurahService.getSurah().subscribe({
      next: (res) => {
        this.allSurahsName = res.data
       
        
      },

      error: (error) => { console.log(error) }
    })
  }
}
