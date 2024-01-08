import { Component, } from '@angular/core';
import { SurahDataService } from '../surah-data.service';
import { ActivatedRoute } from '@angular/router';
import { AyahData } from '../surah-data-and-text'

@Component({
  selector: 'app-surah-data',
  templateUrl: './surah-data.component.html',
  styleUrls: ['./surah-data.component.scss']
})
export class SurahDataComponent {

  ayahData!: AyahData[];
  ayahAudio!:string[];
  ayahNumberForApi!: number;
  surahNameInEnglish!: string;
  ayahName!: string;
  surahNumber!:number
  englishNameTranslation!: string;
  i: number = 0
  constructor(private _SurahDataService: SurahDataService, private _ActivatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.ayahNumberForApi = this._ActivatedRoute.snapshot.params['number']
    this._SurahDataService.getAyahData(this.ayahNumberForApi).subscribe({
      next: (res) => {
       
       this.surahNumber=res.data.number
        
        this.ayahData = res.data.ayahs
        this.surahNameInEnglish = res.data.englishName
        this.ayahName = res.data.name
        this.englishNameTranslation = res.data.englishNameTranslation
        // this.ayahAudio = res.data.ayahs[this.i].audio
        this.ayahAudio=[`https://cdn.islamic.network/quran/audio-surah/128/ar.alafasy/${this.ayahNumberForApi}.mp3`]
      },
      error: (error) => {
        location.reload()
      },
    })

  }



}
