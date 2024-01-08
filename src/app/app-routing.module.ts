import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { JuzComponent } from './juz/juz.component';
import { SurahComponent } from './surah/surah.component';
import { AyahComponent } from './ayah/ayah.component';
import { SurahDataComponent } from './surah-data/surah-data.component';
import { JuzDataComponent } from './juz-data/juz-data.component';

const routes: Routes = [
  {path:"home",component:HomeComponent},
  {path:"juz",component:JuzComponent},
  {path:"surah",component:SurahComponent},
  {path:"ayah",component:AyahComponent},
  {path:"surahData/:number",component:SurahDataComponent},
  {path:"juzData/:number",component:JuzDataComponent},
  {path:"**",component:HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
