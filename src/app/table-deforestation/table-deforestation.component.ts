import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table-deforestation',
  templateUrl: './table-deforestation.component.html',
  styleUrls: ['./table-deforestation.component.scss']
})
export class TableDeforestationComponent implements OnInit {

  selectedVegetation: any
  start: any
  without: any
  with: any

  withoutResult: any
  withResult: any
  withoutResultTotal: any
  withResultTotal: any
  start2: any
  without2: any
  with2: any

  withoutResult2: any
  withResult2: any
  withoutResultTotal2: any
  withResultTotal2: any

  start3: any
  without3: any
  with3: any

  withoutResult3: any
  withResult3: any
  withoutResultTotal3: any
  withResultTotal3: any
  randomNumber: number;
  climate : any

  ngOnInit(): void {
  }

  generateRandomDecimal(min: number, max: number, decimalPlaces: number): number {
    const rand = Math.random() * (max - min) + min;
    return parseFloat(rand.toFixed(decimalPlaces));
  }

  calcul(){
    console.log("hh")
    this.withoutResult = this.start-this.without
    this.withResult = this.start-this.with
    this.withoutResultTotal = this.withoutResult * this.generateRandomDecimal(36,150,2)
    this.withResultTotal = this.withResult * this.generateRandomDecimal(36,150,2)
    this.withoutResult2 = this.start2-this.without2
    this.withResult2 = this.start2-this.with2
    this.withoutResultTotal2 = this.withoutResult2 * this.generateRandomDecimal(36,150,2)
    this.withResultTotal2 = this.withResult2 * this.generateRandomDecimal(36,150,2)
    
    this.withoutResult3 = this.start3-this.without3
    this.withResult3 = this.start3-this.with3
    this.withoutResultTotal3 = this.withoutResult3 * this.generateRandomDecimal(36,150,2)
    this.withResultTotal3 = this.withResult3 * this.generateRandomDecimal(36,150,2)
  }
}
