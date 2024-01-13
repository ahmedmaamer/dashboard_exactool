import { Component , OnInit } from '@angular/core';

@Component({
  selector: 'app-table-grassland',
  templateUrl: './table-grassland.component.html',
  styleUrls: ['./table-grassland.component.scss']
})
export class TableGrasslandComponent implements OnInit {
  start1 : any
  without1 : any
  with1 : any
  start2 : any
  without2 : any
  with2 : any
  start3 : any
  without3 : any
  with3 : any
  withoutResult1 : any
  withoutResult2 : any
  withoutResult3 : any
  withResult1:any
  withResult2:any
  withResult3:any
  ngOnInit(): void {
    
  }


  generateRandomDecimal(min: number, max: number, decimalPlaces: number): number {
    const rand = Math.random() * (max - min) + min;
    return parseFloat(rand.toFixed(decimalPlaces));
  }

  calcul(){
    this.withoutResult1 = (this.start1-this.without1) * this.generateRandomDecimal(36,150,2)
    this.withResult1 = (this.start1-this.with1) * this.generateRandomDecimal(36,150,2)
    this.withoutResult2 = (this.start2-this.without2) * this.generateRandomDecimal(36,150,2)
    this.withResult2 = (this.start2-this.with2) * this.generateRandomDecimal(36,150,2)
    this.withoutResult3 = (this.start3-this.without3) * this.generateRandomDecimal(36,150,2)
    this.withResult3 = (this.start3-this.with3) * this.generateRandomDecimal(36,150,2)

  }

}
