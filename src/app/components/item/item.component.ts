import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from '../../services/productos.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html'
})
export class ItemComponent {

  item:any = undefined;
  cod:any = undefined;

  constructor(public route: ActivatedRoute,
              public ps: ProductosService ) {
route.params.subscribe( parametros=>{

// console.log(parametros);
// console.log(parametros['id']);

ps.cargar_producto( parametros['id'])
  .subscribe( res => {

    this.cod = parametros['id'];
    this.item = res.json();
      // console.log( this.item );
  });

})
}

}
