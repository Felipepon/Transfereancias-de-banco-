import { NgModule, LOCALE_ID } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import localeES from "@angular/common/locales/es-CL"
import { AppComponent } from './app.component';
import { NuevaTransferenciaComponent } from './NuevaTransferencia/nueva-transferencia.component';
import { StatusAcoountComponent } from './status-acoount/status-acoount.component';
import { registerLocaleData } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing';

registerLocaleData(localeES, "es")

@NgModule({
  declarations: [AppComponent, NuevaTransferenciaComponent, StatusAcoountComponent],
  imports: [BrowserModule, FormsModule, HttpClientModule, AppRoutingModule],

  providers: [
    {
      provide: LOCALE_ID, useValue: 'es'
    }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
