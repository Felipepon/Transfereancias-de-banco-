import { Component } from '@angular/core';
import { TransferenciasService } from '../Services/Transferencias.service';
import { Transferencia } from '../Models/transferencia.model';

import { Router } from '@angular/router';

@Component({
  selector: 'app-nueva-transferencia',
  templateUrl: './nueva-transferencia.component.html',
  styleUrls: ['./nueva-transferencia.component.scss'],

})
export class NuevaTransferenciaComponent {


  constructor(private service: TransferenciasService, private router: Router) {}

  valor: string = '';
  destino: string = '';

  transferir() {

    const Data: Transferencia = {
      valor : this.valor,
      destino: this.destino,
      fecha: new Date()
    }

    this.service.agregar(Data).subscribe(
      () => {
        this.router.navigateByUrl('estado');
      },
      (err) => console.log(err)
    );
    this.eliminateValue();
  }

  eliminateValue (){
    this.valor = '';
    this.destino = '';
  }
}
