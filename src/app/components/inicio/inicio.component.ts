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
      img:""
    },
    {
      id:2,
      nombre: "Jesús Coello",
      rol:"Coordinador front-end",
      img:""
    },
    {
      id:3,
      nombre: "Francisco José Rodríguez",
      rol:"Coordinador back-end",
      img:""
    },
    {
      id:4,
      nombre: "Álvaro Alcón",
      rol:"Desarrollador front-end",
      img:""
    },
    {
      id:5,
      nombre: "Moisés Martín",
      rol:"Desarrollador front-end",
      img:""
    },
    {
      id:6,
      nombre: "Julio Martínez",
      rol:"Desarrollador front-end",
      img:""
    },
    {
      id:7,
      nombre: "Pedro Manuel Cobos",
      rol:"Desarrollador front-end",
      img:""
    },
    {
      id:8,
      nombre: "Pablo Leal",
      rol:"Desarrollador back-end",
      img:""
    },
    {
      id:9,
      nombre: "Antonio Rosado",
      rol:"Desarrollador front-end",
      img:""
    },
    {
      id:10,
      nombre: "Alejandro González",
      rol:"Desarrollador back-end",
      img:""
    },
  ]

  constructor() { }

}
