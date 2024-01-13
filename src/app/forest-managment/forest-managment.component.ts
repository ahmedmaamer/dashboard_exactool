import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';

@Component({
  selector: 'app-forest-managment',
  templateUrl: './forest-managment.component.html',
  styleUrls: ['./forest-managment.component.scss']
})
export class ForestManagmentComponent implements OnInit {
  start1: any
  without1: any
  with1: any
  start2: any
  without2: any
  with2: any
  start3: any
  without3: any
  with3: any
  withoutResult1: any
  withoutResult2: any
  withoutResult3: any
  withResult1: any
  withResult2: any
  withResult3: any
  startarea1: any
  startarea2: any
  startarea3: any
  ngOnInit(): void {
    Chart.register(...registerables);
    this.getchart()
  }

  calcul(){
    if(this.start1 == this.without1){
      this.withoutResult1 = 0
    }
    if(this.start1 < this.without1){
      if(this.without1 == 1){
        this.withoutResult1 = this.startarea1 * 19.66
      }
      if(this.without1 == 2){
        this.withoutResult1 = this.startarea1 * 39
      }
      if(this.without1 == 3){
        this.withoutResult1 = this.startarea1 * 78
      }
      if(this.without1 == 4){
        this.withoutResult1 = this.startarea1 * 117
      }
      if(this.without1 == 5){
        this.withoutResult1 = this.startarea1 * 156
      }
    }
    if(this.start1 > this.without1){
      if(this.without1 == 1){
        this.withoutResult1 = this.startarea1 * -19.66
      }
      if(this.without1 == 2){
        this.withoutResult1 = this.startarea1 * -39
      }
      if(this.without1 == 3){
        this.withoutResult1 = this.startarea1 * -78
      }
      if(this.without1 == 4){
        this.withoutResult1 = this.startarea1 * -117
      }
      if(this.without1 == 5){
        this.withoutResult1 = this.startarea1 * -156
      }
    }

    if(this.start1 == this.with1){
      this.withResult1 = 0
    }
    if(this.start1 < this.with1){
      if(this.with1 == 1){
        this.withResult1 = this.startarea1 * 19.66
      }
      if(this.with1 == 2){
        this.withResult1 = this.startarea1 * 39
      }
      if(this.with1 == 3){
        this.withResult1 = this.startarea1 * 78
      }
      if(this.with1 == 4){
        this.withResult1 = this.startarea1 * 117
      }
      if(this.with1 == 5){
        this.withResult1 = this.startarea1 * 156
      }
    }
    if(this.start1 > this.with1){
      if(this.with1 == 1){
        this.withResult1 = this.startarea1 * -19.66
      }
      if(this.with1 == 2){
        this.withResult1 = this.startarea1 * -39
      }
      if(this.with1 == 3){
        this.withResult1 = this.startarea1 * -78
      }
      if(this.with1 == 4){
        this.withResult1 = this.startarea1 * -117
      }
      if(this.with1 == 5){
        this.withResult1 = this.startarea1 * -156
      }
    }
  }

  getchart() {
    const data = {
      labels: [
        'Red',
        'Blue',
        'Yellow'
      ],
      datasets: [{
        label: 'My First Dataset',
        data: [300, 50, 100],
        backgroundColor: [
          'rgb(255, 99, 132)',
          'rgb(54, 162, 235)',
          'rgb(255, 205, 86)'
        ],
        hoverOffset: 4
      }]
    };

    new Chart("myChartTwo", {
      type: 'doughnut',
      data: data,
    });
  }

}
