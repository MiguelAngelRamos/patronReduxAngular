import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// ngrx
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { contadorReducer } from './contador/contador.reduce';

import { AppComponent } from './app.component';
import { HijoComponent } from './contador/hijo/hijo.component';
import { NietoComponent } from './contador/nieto/nieto.component';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    HijoComponent,
    NietoComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot( { contador: contadorReducer}), // mi estado lo voy a manejar en español
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states ( maneja 25 estados)
      logOnly: environment.production, // Restrict extension to log-only mode
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
