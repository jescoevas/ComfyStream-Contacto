import { Component, OnDestroy, OnInit } from '@angular/core';
import * as countdown from 'countdown';

interface Time{
    days?:number,
    hours?:number,
    minutes?:number,
    seconds?:number
}

@Component({
  selector: 'app-lanzamiento',
  templateUrl: './lanzamiento.component.html',
  styleUrls: ['./lanzamiento.component.css']
})
export class LanzamientoComponent implements OnInit , OnDestroy{

  fechaLanzamiento = new Date("2021-06-08")
  time:Time = {}
  timerId:number

  constructor() {
    this.timerId = Number(countdown(this.fechaLanzamiento, (ts) => {
      this.time = ts
    }, countdown.DAYS | countdown.HOURS | countdown.MINUTES | countdown.SECONDS))
   }

  ngOnInit(): void {
    
  }

  ngOnDestroy(): void {
    if(this.timerId){
      clearInterval(this.timerId)
    }
  }

}
