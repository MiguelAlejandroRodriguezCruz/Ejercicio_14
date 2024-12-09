import { Component } from '@angular/core';

@Component({
  selector: 'app-directivas',
  imports: [],
  templateUrl: './directivas.component.html',
  styleUrl: './directivas.component.css'
})
export class DirectivasComponent {
  //Esta logeado o no el usuario
  usuarioLogeado = true
  //Listado de emplados
  usuarios = [
    {
      id: 1,
      nombre: "Miguel",
      sueldo: 10000,
      activo: true
    },

    {
      id: 2,
      nombre: "Alejandro",
      sueldo: 10000,
      activo: true
    },

    {
      id: 3,
      nombre: "Axel",
      sueldo: 10000,
      activo: true
    },
    {
      id: 4,
      nombre: "Giovany",
      sueldo: 10000,
      activo: true
    },
    {
      id: 5,
      nombre: "Carlos",
      sueldo: 10000,
      activo: true
    },
    {
      id: 6,
      nombre: "Omar",
      sueldo: 10000,
      activo: false
    },
    {
      id: 7,
      nombre: "Daniel",
      sueldo: 10000,
      activo: true
    },
    {
      id: 8,
      nombre: "Desire",
      sueldo: 10000,
      activo: false
    },
    {
      id: 9,
      nombre: "Yave",
      sueldo: 10000,
      activo: true
    },
    {
      id: 10,
      nombre: "Suly",
      sueldo: 10000,
      activo: true
    },
  ]

}
