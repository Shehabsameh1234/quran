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
   surahNamesArabi:string[] = [
    "الفاتحة",
    "البقرة",
    "آل عمران",
    "النساء",
    "المائدة",
    "الأنعام",
    "الأعراف",
    "الأنفال",
    "التوبة",
    "يونس",
    "هود",
    "يوسف",
    "الرعد",
    "إبراهيم",
    "الحجر",
    "النحل",
    "الإسراء",
    "الكهف",
    "مريم",
    "طه",
    "الأنبياء",
    "الحج",
    "المؤمنون",
    "النّور",
    "الفرقان",
    "الشعراء",
    "النّمل",
    "القصص",
    "العنكبوت",
    "الرّوم",
    "لقمان",
    "السجدة",
    "الأحزاب",
    "سبأ",
    "فاطر",
    "يس",
    "الصافات",
    "ص",
    "الزمر",
    "غافر",
    "فصّلت",
    "الشورى",
    "الزخرف",
    "الدّخان",
    "الجاثية",
    "الأحقاف",
    "محمد",
    "الفتح",
    "الحجرات",
    "ق",
    "الذاريات",
    "الطور",
    "النجم",
    "القمر",
    "الرحمن",
    "الواقعة",
    "الحديد",
    "المجادلة",
    "الحشر",
    "الممتحنة",
    "الصف",
    "الجمعة",
    "المنافقون",
    "التغابن",
    "الطلاق",
    "التحريم",
    "الملك",
    "القلم",
    "الحاقة",
    "المعارج",
    "نوح",
    "الجن",
    "المزّمّل",
    "المدّثر",
    "القيامة",
    "الإنسان",
    "المرسلات",
    "النبأ",
    "النازعات",
    "عبس",
    "التكوير",
    "الإنفطار",
    "المطفّفين",
    "الإنشقاق",
    "البروج",
    "الطارق",
    "الأعلى",
    "الغاشية",
    "الفجر",
    "البلد",
    "الشمس",
    "الليل",
    "الضحى",
    "الشرح",
    "التين",
    "العلق",
    "القدر",
    "البينة",
    "الزلزلة",
    "العاديات",
    "القارعة",
    "التكاثر",
    "العصر",
    "الهمزة",
    "الفيل",
    "قريش",
    "الماعون",
    "الكوثر",
    "الكافرون",
    "النصر",
    "المسد",
    "الإخلاص",
    "الفلق",
    "الناس"
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
      error: (error) => { console.log(error) },
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
      error: (error) => { console.log(error) },
    })
  }

}
