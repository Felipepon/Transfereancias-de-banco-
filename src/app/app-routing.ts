import { StatusAcoountComponent } from './status-acoount/status-acoount.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Routes } from '@angular/router';

import { NuevaTransferenciaComponent } from './NuevaTransferencia/nueva-transferencia.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'estado',
    pathMatch: 'full',
  },
  {
    path: 'estado',
    component: StatusAcoountComponent,
  },
  {
    path: 'nueva-transferencia',
    component: NuevaTransferenciaComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
