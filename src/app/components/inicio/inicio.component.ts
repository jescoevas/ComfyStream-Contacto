import { Component } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent{

  miembros:any = [
    {
      id:1,
      nombre: "Sergio Perea",
      rol:"Project manager",
      img:"assets/imgs/sergio.jpeg"
    },
    {
      id:2,
      nombre: "Jesús Coello",
      rol:"Coordinador backend",
      img:"assets/imgs/jesus.jpeg"
    },
    {
      id:3,
      nombre: "Francisco José Rodríguez",
      rol:"Coordinador frontend",
      img:"assets/imgs/fran.jpeg"
    },
    {
      id:4,
      nombre: "Álvaro Alcón",
      rol:"Desarrollador front-end",
      img:"assets/imgs/alvaro.jpg"
    },
    {
      id:5,
      nombre: "Moisés Martín",
      rol:"Desarrollador front-end",
      img:"assets/imgs/moises.jpg"
    },
    {
      id:6,
      nombre: "Julio Martínez",
      rol:"Desarrollador front-end",
      img:"assets/imgs/julio.jpg"
    },
    {
      id:7,
      nombre: "Pedro Manuel Cobos",
      rol:"Desarrollador front-end",
      img:"assets/imgs/pedro.jpg"
    },
    {
      id:8,
      nombre: "Pablo Leal",
      rol:"Desarrollador back-end",
      img:"assets/imgs/pablo.jpeg"
    },
    {
      id:9,
      nombre: "Antonio Rosado",
      rol:"Desarrollador front-end",
      img:"assets/imgs/antonio.jpg"
    },
    {
      id:10,
      nombre: "Alejandro González",
      rol:"Desarrollador back-end",
      img:"assets/imgs/alejandro.jpg"
    },
  ]

  constructor() { }

}
