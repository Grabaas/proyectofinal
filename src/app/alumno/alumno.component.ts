import { HttpClient } from '@angular/common/http';
import { interval } from 'rxjs';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-alumno',
  templateUrl: './alumno.component.html',
  styleUrls: ['./alumno.component.css']
})


export class AlumnoComponent  implements OnInit {
  
    showContent1 = true;
    showContent2 = false;
    showContent3 = false;
  
    toggleContent(contentNumber: number) {
  
      // Reiniciar todos los contenidos a "false" para que solo uno esté activo
      this.showContent1 = false;
      this.showContent2 = false;
      this.showContent3 = false;
  
      // Establecer el contenido deseado en "true" según el número proporcionado
      if (contentNumber === 1) {
        this.showContent1 = true;
      } else if (contentNumber === 2) {
        this.showContent2 = true;
      } else if (contentNumber === 3) {
        this.showContent3 = true;
      }
    }
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