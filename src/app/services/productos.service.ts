import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class ProductosService {

productos:any[] = [];
cargando:boolean = true;

  constructor( public http: Http ) {

    this.cargar_productos();

   }

   public cargar_productos() {

     this.cargando=true;
     this.http.get("https://ngportafolio.firebaseio.com/productos_idx.json")
         .subscribe( res=> {

      // console.log(res.json() );

      setTimeout( () => {
        this.productos = res.json();
        this.cargando = false;
      },1500)
    });

   }

   // if( this.productos.length===0 ) {
   //
   // }

}
