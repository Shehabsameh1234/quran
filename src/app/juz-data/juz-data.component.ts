import { Component } from '@angular/core';
import { JuzDataService } from '../juz-data.service';
import { ActivatedRoute } from '@angular/router';
import{Ayah}from'../juz-data'



@Component({
  selector: 'app-juz-data',
  templateUrl: './juz-data.component.html',
  styleUrls: ['./juz-data.component.scss']
})
export class JuzDataComponent {

  juzNumberFroApi!: number;
  ayahjuzData!:Ayah[]
  juzNumber!:number


  constructor(private _JuzDataService: JuzDataService, private _ActivatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.juzNumberFroApi = this._ActivatedRoute.snapshot.params['number']

    this._JuzDataService.getJuzData(this.juzNumberFroApi).subscribe(
      {
        next: (res) => {
         this.ayahjuzData=res.data.ayahs
         this.juzNumber=res.data.number
       
         
        },
        error: (error) => {
          console.log(error);
        }
      }
    )



  }

}
