import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { YoutubeComponent } from './youtube/youtube.component';
import { HomeComponent } from './home/home.component';
import { EstadoDeCuentaComponent } from './estado-de-cuenta/estado-de-cuenta.component';
import { ReinscripcionComponent } from './reinscripcion/reinscripcion.component';
import { HorarioComponent } from './horario/horario.component';
import { AlumnoComponent } from './alumno/alumno.component';
import { HttpClientModule } from '@angular/common/http';



const routes : Routes=[
{ path: '' , component: HomeComponent, children: [
]  },
{ path: 'youtube' , component: YoutubeComponent },
{ path: 'estado_de_cuenta' , component: EstadoDeCuentaComponent },
{ path: 'reinscripcion' , component: ReinscripcionComponent },
{ path: 'horario' , component: HorarioComponent },
{ path: 'alumno' , component: AlumnoComponent },


];

@NgModule({
  declarations: [
    AppComponent,
    YoutubeComponent,
    HomeComponent,
    EstadoDeCuentaComponent,
    ReinscripcionComponent,
    HorarioComponent,
    AlumnoComponent,
  
  ],
  imports: [
    BrowserModule,
    RouterModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
