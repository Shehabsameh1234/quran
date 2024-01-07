import { Component, ElementRef, ViewChild } from '@angular/core';
import { SurahDataService } from '../surah-data.service';
import { ActivatedRoute } from '@angular/router';
import { AyahData } from '../surah-data-and-text'

@Component({
  selector: 'app-surah-data',
  templateUrl: './surah-data.component.html',
  styleUrls: ['./surah-data.component.scss']
})
export class SurahDataComponent {
  // @ViewChild('myAudioElement') myAudioElement!: ElementRef;
  ayahData!: AyahData[];
  // ayahAudio!: AyahData[];
  ayahAudio!:string[];
  ayahNumberForApi!: number;
  surahNameInEnglish!: string;
  ayahName!: string;
  englishNameTranslation!: string;
  i: number = 0
  constructor(private _SurahDataService: SurahDataService, private _ActivatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.ayahNumberForApi = this._ActivatedRoute.snapshot.params['number']
    this._SurahDataService.getAyahData(this.ayahNumberForApi).subscribe({
      next: (res) => {
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


//   ngAfterViewInit(): void {
//     const audio = this.myAudioElement.nativeElement;
//     audio.addEventListener('ended', () => {
//       this.i++
      
//       this._SurahDataService.getAyahData(this.ayahNumberForApi).subscribe({
//         next: (res) => {
//           this.ayahAudio = res.data.ayahs[this.i].audio
//           if(this.i==res.data.ayahs.length-1){this.i=-1}
//         }
//       })
//     });
//   }
}
