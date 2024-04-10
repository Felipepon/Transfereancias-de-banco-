import { Transferencia } from '../Models/transferencia.model';
import { Injectable } from '@angular/core';
import {HttpClient } from "@angular/common/http"

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransferenciasService {

  listatransferencias: any[];
  url : string = 'http://localhost:3000/transferencias'

constructor(private HttpClient: HttpClient) {
  this.listatransferencias = [];
 }

 allTransacciones(): Observable<Transferencia[]>{
   return this.HttpClient.get<Transferencia[]>(this.url)
 }

 get transferencias(){
  return this.listatransferencias
 }
 agregar(tranferencia: Transferencia): Observable<Transferencia>{
    return this.HttpClient.post<Transferencia>(this.url, tranferencia)//this.transferencias.push( tranferencia);
 }

}
