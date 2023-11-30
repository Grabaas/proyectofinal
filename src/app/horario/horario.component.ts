import { HttpClient } from '@angular/common/http';
import { interval } from 'rxjs';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-horario',
  templateUrl: './horario.component.html',
  styleUrls: ['./horario.component.css']
})
export class HorarioComponent {
  alumnos: any[] = []; // Inicializar la variable de alumnos ahora como una lista vacía

  constructor(private http: HttpClient) { }
  ngOnInit(): void {
    this.obtenerDatos();
    interval(10 * 60 * 1000).subscribe(() => {
      this.obtenerDatos();
    });
  }

  obtenerDatos() {
    // Obtener alumnos
    const urlAlumnos = 'http://localhost:5000/api/alumno';
    this.http.get<any[]>(urlAlumnos).subscribe(
      (data) => {
        this.alumnos = data; // Asignar el valor obtenido de la solicitud HTTP
        console.log('Alumnos:', this.alumnos);
      },
      (error) => {
        console.error('Error al obtener los alumnos:', error);
      }
    );
  }
}

