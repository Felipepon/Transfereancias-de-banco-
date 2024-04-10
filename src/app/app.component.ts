import { Component } from '@angular/core';
import { TransferenciasService } from './Services/Transferencias.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  transferencias:any[] = []
  constructor(private service: TransferenciasService){

  }
  transferir($event: any){
    this.service.agregar($event)

  }

}
