import { Transferencia } from './../Models/transferencia.model';
import { Component, Input, OnInit} from '@angular/core';
import { TransferenciasService } from '../Services/Transferencias.service';

@Component({
  selector: 'app-status-acoount',
  templateUrl: './status-acoount.component.html',
  styleUrls: ['./status-acoount.component.scss']
})
export class StatusAcoountComponent implements OnInit {

  transferencias:any[] = []

  constructor(private service: TransferenciasService ) {

  }

  ngOnInit(): void {
    this.service.allTransacciones().subscribe((m: Transferencia[]) =>{
      this.transferencias= m;
    })  
  }

}
