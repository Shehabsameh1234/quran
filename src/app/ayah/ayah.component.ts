import { Component } from '@angular/core';
import { GetAyahService } from '../get-ayah.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-ayah',
  templateUrl: './ayah.component.html',
  styleUrls: ['./ayah.component.scss']
})
export class AyahComponent {
  AyahNumberFroApi: number = this._ActivatedRoute.snapshot.params['number'];
  ayahNmberInSurahFroApi: number = this._ActivatedRoute.snapshot.params['numberInSurah']
  surahNumberForApi: number = this._ActivatedRoute.snapshot.params['numberOfSurah']
  audioSources: string[] = ['https://cdn.islamic.network/quran/audio/128/ar.alafasy/262.mp3']; // Add your audio sources here
  currentSource: string = this.audioSources[0];
  ayahText: string = `اللَّهُ لَا إِلَٰهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ ۚ لَا تَأْخُذُهُ سِنَةٌ وَلَا نَوْمٌ ۚ لَهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الْأَرْضِ ۗ مَنْ ذَا الَّذِي يَشْفَعُ عِنْدَهُ إِلَّا بِإِذْنِهِ ۚ يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُمْ ۖ وَلَا يُحِيطُونَ بِشَيْءٍ مِنْ عِلْمِهِ إِلَّا بِمَا شَاءَ ۚ وَسِعَ كُرْسِيُّهُ السَّمَاوَاتِ وَالْأَرْضَ ۖ وَلَا يَئُودُهُ حِفْظُهُمَا ۚ وَهُوَ الْعَلِيُّ الْعَظِيمُ`
  numberOfAyah: number = 255
  surahNameInArabic: string = "سُورَةُ البَقَرَةِ"
  surahNameInEnglish: string = "Al-Baqara"
  surahNumber: number = 2
  audio: number = 262
   surahNamesArabi:any[] = [
    { name: 'الفاتحة', numberOfAyahs: 7 },
  { name: 'البقرة', numberOfAyahs: 286 },
  { name: 'آل عمران', numberOfAyahs: 200 },
  { name: 'النساء', numberOfAyahs: 176 },
  { name: 'المائدة', numberOfAyahs: 120 },
  { name: 'الأنعام', numberOfAyahs: 165 },
  { name: 'الأعراف', numberOfAyahs: 206 },
  { name: 'الأنفال', numberOfAyahs: 75 },
  { name: 'التوبة', numberOfAyahs: 129 },
  { name: 'يونس', numberOfAyahs: 109 },
  { name: 'هود', numberOfAyahs: 123 },
  { name: 'يوسف', numberOfAyahs: 111 },
  { name: 'الرعد', numberOfAyahs: 43 },
  { name: 'إبراهيم', numberOfAyahs: 52 },
  { name: 'الحجر', numberOfAyahs: 99 },
  { name: 'النحل', numberOfAyahs: 128 },
  { name: 'الإسراء', numberOfAyahs: 111 },
  { name: 'الكهف', numberOfAyahs: 110 },
  { name: 'مريم', numberOfAyahs: 98 },
  { name: 'طه', numberOfAyahs: 135 },
  { name: 'الأنبياء', numberOfAyahs: 112 },
  { name: 'الحج', numberOfAyahs: 78 },
  { name: 'المؤمنون', numberOfAyahs: 118 },
  { name: 'النور', numberOfAyahs: 64 },
  { name: 'الفرقان', numberOfAyahs: 77 },
  { name: 'الشعراء', numberOfAyahs: 227 },
  { name: 'النمل', numberOfAyahs: 93 },
  { name: 'القصص', numberOfAyahs: 88 },
  { name: 'العنكبوت', numberOfAyahs: 69 },
  { name: 'الروم', numberOfAyahs: 60 },
  { name: 'لقمان', numberOfAyahs: 34 },
  { name: 'السجدة', numberOfAyahs: 30 },
  { name: 'الأحزاب', numberOfAyahs: 73 },
  { name: 'سبإ', numberOfAyahs: 54 },
  { name: 'فاطر', numberOfAyahs: 45 },
  { name: 'يس', numberOfAyahs: 83 },
  { name: 'الصافات', numberOfAyahs: 182 },
  { name: 'ص', numberOfAyahs: 88 },
  { name: 'الزمر', numberOfAyahs: 75 },
  { name: 'غافر', numberOfAyahs: 85 },
  { name: 'فصلت', numberOfAyahs: 54 },
  { name: 'الشورى', numberOfAyahs: 53 },
  { name: 'الزخرف', numberOfAyahs: 89 },
  { name: 'الدخان', numberOfAyahs: 59 },
  { name: 'الجاثية', numberOfAyahs: 37 },
  { name: 'الأحقاف', numberOfAyahs: 35 },
  { name: 'محمد', numberOfAyahs: 38 },
  { name: 'الفتح', numberOfAyahs: 29 },
  { name: 'الحجرات', numberOfAyahs: 18 },
  { name: 'ق', numberOfAyahs: 45 },
  { name: 'الذاريات', numberOfAyahs: 60 },
  { name: 'الطور', numberOfAyahs: 49 },
  { name: 'النجم', numberOfAyahs: 62 },
  { name: 'القمر', numberOfAyahs: 55 },
  { name: 'الرحمن', numberOfAyahs: 78 },
  { name: 'الواقعة', numberOfAyahs: 96 },
  { name: 'الحديد', numberOfAyahs: 29 },
  { name: 'المجادلة', numberOfAyahs: 22 },
  { name: 'الحشر', numberOfAyahs: 24 },
  { name: 'الممتحنة', numberOfAyahs: 13 },
  { name: 'الصف', numberOfAyahs: 14 },
  { name: 'الجمعة', numberOfAyahs: 11 },
  { name: 'المنافقون', numberOfAyahs: 11 },
  { name: 'التغابن', numberOfAyahs: 18 },
  { name: 'الطلاق', numberOfAyahs: 12 },
  { name: 'التحريم', numberOfAyahs: 12 },
  { name: 'الملك', numberOfAyahs: 30 },
  { name: 'القلم', numberOfAyahs: 52 },
  { name: 'الحاقة', numberOfAyahs: 52 },
  { name: 'المعارج', numberOfAyahs: 44 },
  { name: 'نوح', numberOfAyahs: 28 },
  { name: 'الجن', numberOfAyahs: 28 },
  { name: 'المزمل', numberOfAyahs: 20 },
  { name: 'المدثر', numberOfAyahs: 56 },
  { name: 'القيامة', numberOfAyahs: 40 },
  { name: 'الإنسان', numberOfAyahs: 31 },
  { name: 'المرسلات', numberOfAyahs: 50 },
  { name: 'النبأ', numberOfAyahs: 40 },
  { name: 'النازعات', numberOfAyahs: 46 },
  { name: 'عبس', numberOfAyahs: 42 },
  { name: 'التكوير', numberOfAyahs: 29 },
  { name: 'الإنفطار', numberOfAyahs: 19 },
  { name: 'المطففين', numberOfAyahs: 36 },
  { name: 'الإنشقاق', numberOfAyahs: 25 },
  { name: 'البروج', numberOfAyahs: 22 },
  { name: 'الطارق', numberOfAyahs: 17 },
  { name: 'الأعلى', numberOfAyahs: 19 },
  { name: 'الغاشية', numberOfAyahs: 26 },
  { name: 'الفجر', numberOfAyahs: 30 },
  { name: 'البلد', numberOfAyahs: 20 },
  { name: 'الشمس', numberOfAyahs: 15 },
  { name: 'الليل', numberOfAyahs: 21 },
  { name: 'الضحى', numberOfAyahs: 11 },
  { name: 'الشرح', numberOfAyahs: 8 },
  { name: 'التين', numberOfAyahs: 8 },
  { name: 'العلق', numberOfAyahs: 19 },
  { name: 'القدر', numberOfAyahs: 5 },
  { name: 'البينة', numberOfAyahs: 8 },
  { name: 'الزلزلة', numberOfAyahs: 8 },
  { name: 'العاديات', numberOfAyahs: 11 },
  { name: 'القارعة', numberOfAyahs: 11 },
  { name: 'التكاثر', numberOfAyahs: 8 },
  { name: 'العصر', numberOfAyahs: 3 },
  { name: 'الهمزة', numberOfAyahs: 9 },
  { name: 'الفيل', numberOfAyahs: 5 },
  { name: 'قريش', numberOfAyahs: 4 },
  { name: 'الماعون', numberOfAyahs: 7 },
  { name: 'الكوثر', numberOfAyahs: 3 },
  { name: 'الكافرون', numberOfAyahs: 6 },
  { name: 'النصر', numberOfAyahs: 3 },
  { name: 'المسد', numberOfAyahs: 5 },
  { name: 'الإخلاص', numberOfAyahs: 4 },
  { name: 'الفلق', numberOfAyahs: 5 },
  { name: 'الناس', numberOfAyahs: 6 },
  ];
  

  constructor(private _GetAyahService: GetAyahService, private _ActivatedRoute: ActivatedRoute) {
  }
  ngOnInit(): void {
    if (this.AyahNumberFroApi == undefined) { this.AyahNumberFroApi = 262 }
    this.audioSources = [`https://cdn.islamic.network/quran/audio/128/ar.alafasy/${this.AyahNumberFroApi}.mp3`]
    this.changeAudioSource()
    this._GetAyahService.getAyah(this.surahNumberForApi, this.ayahNmberInSurahFroApi).subscribe({
      next: (res) => {
        this.ayahText = res.data.text
        this.numberOfAyah = res.data.numberInSurah
        this.surahNameInArabic = res.data.surah.name
        this.surahNameInEnglish = res.data.surah.englishName
        this.surahNumber = res.data.surah.number
      },
      error: (error) => {alert(error.message) },
    })

  }
  changeAudioSource() {
    this.currentSource = this.audioSources[0];
  }
  getAyahForm: FormGroup = new FormGroup({
    surahNumber: new FormControl(115, [Validators.required]),
    ayahNumber: new FormControl(null, [Validators.required])
  })

  getAyah(getAyahForm1: FormGroup) {
    this._GetAyahService.getAyah(getAyahForm1.value.surahNumber, getAyahForm1.value.ayahNumber).subscribe({
      next: (res) => {
        this.ayahText = res.data.text
        this.numberOfAyah = res.data.numberInSurah
        this.surahNameInArabic = res.data.surah.name
        this.surahNameInEnglish = res.data.surah.englishName
        this.surahNumber = res.data.surah.number
        this.audio = res.data.number
        this.audioSources = [`https://cdn.islamic.network/quran/audio/128/ar.alafasy/${res.data.number}.mp3`]
        this.changeAudioSource()
      },
      error: (error) => { alert(error.message) },
    })
  }

}
