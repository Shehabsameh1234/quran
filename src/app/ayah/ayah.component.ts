import { Component } from '@angular/core';
import { GetAyahService } from '../get-ayah.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-ayah',
  templateUrl: './ayah.component.html',
  styleUrls: ['./ayah.component.scss']
})
export class AyahComponent {

  ayahText: string = `اللَّهُ لَا إِلَٰهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ ۚ لَا تَأْخُذُهُ سِنَةٌ وَلَا نَوْمٌ ۚ لَهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الْأَرْضِ ۗ مَنْ ذَا الَّذِي يَشْفَعُ عِنْدَهُ إِلَّا بِإِذْنِهِ ۚ يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُمْ ۖ وَلَا يُحِيطُونَ بِشَيْءٍ مِنْ عِلْمِهِ إِلَّا بِمَا شَاءَ ۚ وَسِعَ كُرْسِيُّهُ السَّمَاوَاتِ وَالْأَرْضَ ۖ وَلَا يَئُودُهُ حِفْظُهُمَا ۚ وَهُوَ الْعَلِيُّ الْعَظِيمُ`

  numberOfAyah: number = 255
  surahNameInArabic: string = "سُورَةُ البَقَرَةِ"
  surahNameInEnglish: string = "Al-Baqara"
  surahNumber: number = 2
  audio: number = 262
  audio1 = new Audio();
  constructor(private _GetAyahService: GetAyahService) {
  }
  getAyahForm: FormGroup = new FormGroup({
    surahNumber: new FormControl(null, [Validators.required]),
    ayahNumber: new FormControl(null, [Validators.required])
  })
  getAyah(getAyahForm1: FormGroup) {
    this._GetAyahService.getAyah(getAyahForm1.value.surahNumber, getAyahForm1.value.ayahNumber).subscribe({
      next: (res) => {
        console.log(res.data.number);
        this.ayahText = res.data.text
        this.numberOfAyah = res.data.numberInSurah
        this.surahNameInArabic = res.data.surah.name
        this.surahNameInEnglish = res.data.surah.englishName
        this.surahNumber = res.data.surah.number
        this.audio = res.data.number
        this.pauseSound()
      },
      error: (error) => { console.log(error) },
    })
  }
  playSound() {
    this.audio1.src = `https://cdn.islamic.network/quran/audio/128/ar.alafasy/${this.audio}.mp3`
    this.audio1.load();
    this.audio1.play()
  }
  pauseSound() {
    this.audio1.pause()
  }

}
