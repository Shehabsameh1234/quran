import { Component, ElementRef, ViewChild } from '@angular/core';
import { JuzDataService } from '../juz-data.service';
import { ActivatedRoute } from '@angular/router';
import { Ayah } from '../juz-data'




@Component({
  selector: 'app-juz-data',
  templateUrl: './juz-data.component.html',
  styleUrls: ['./juz-data.component.scss']
})
export class JuzDataComponent {

  juzNumberFroApi: number = this._ActivatedRoute.snapshot.params['number'];
  ayahjuzData!: Ayah[]
  juzNumber!: number
  @ViewChild('myAudioElement') myAudioElement!: ElementRef;
  ayahAudio!: string;
  i: number = 0;
  autoplayEnabled: boolean = false;


  constructor(private _JuzDataService: JuzDataService, private _ActivatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this._JuzDataService.getJuzData(this.juzNumberFroApi).subscribe(
      {
        next: (res) => {
          this.ayahjuzData = res.data.ayahs
          this.juzNumber = res.data.number
          this.ayahAudio = `https://cdn.islamic.network/quran/audio/64/ar.alafasy/${res.data.ayahs[this.i].number}.mp3`
        },
        error: (error) => {
          console.log(error);
        }
      }
    )
  }
  ngAfterViewInit(): void {
    const audio = this.myAudioElement.nativeElement;
    audio.addEventListener('ended', () => {
      this.i++
      this._JuzDataService.getJuzData(this.juzNumberFroApi).subscribe(
        {
          next: (res) => {
            this.ayahAudio = `https://cdn.islamic.network/quran/audio/64/ar.alafasy/${res.data.ayahs[this.i].number}.mp3`
            if (this.i == res.data.ayahs.length - 1) { this.i = -1 }
            this.autoplayEnabled=true
          },
          error: (error) => {
            console.log(error);
          }
        }
      )
    });
  }

  

 

  

}
