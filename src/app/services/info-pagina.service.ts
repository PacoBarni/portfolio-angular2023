import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoPagina } from '../interfases/info-pagina.interfase';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {   
  info: InfoPagina = {};
  cargada = false;
  equipo:any = [];
  constructor( private http:HttpClient) {
     this.cargarInfo();
     this.cargarEquipo();
  }

  private cargarInfo() {
    this.http.get('assets/data/data-pagina.json')
    .subscribe( (resp: InfoPagina) => {
    this.cargada = true;
    this.info = resp;
    console.log(resp);
});

  }

  private cargarEquipo() { //Donde revisamos la info de Firebase
  this.http.get('https://db-storage-web-angular-default-rtdb.europe-west1.firebasedatabase.app/equip.json')
  .subscribe( resp => {
  this.equipo = resp;
  console.log(resp);
  });
}
}