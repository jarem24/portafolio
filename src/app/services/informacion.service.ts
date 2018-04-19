import { Injectable } from '@angular/core';
import {Http} from '@angular/http';

@Injectable()
export class InformacionService {

info: any = {};
equipo: any [] = [];
cargada: boolean = false;
cargada_about: boolean = false;

  constructor(public http: Http) {
    this.carga_info();
    this.carga_about();

   }

   public carga_info() {
     this.http.get("assets/data/info.pagina.json")
               .subscribe( data => {
                 // console.log(data.json());
                 this.cargada = true;
                 this.info = data.json();
               })
   }

   public carga_about() {
     this.http.get("https://ngportafolio.firebaseio.com/equipo.json")
               .subscribe( data => {
                 // console.log(data.json());
                 this.cargada_about = true;
                 this.equipo = data.json();
               })
   }

}
