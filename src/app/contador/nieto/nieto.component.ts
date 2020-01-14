import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducers';
import { ResetAction } from '../contador.accion';


@Component({
  selector: 'app-nieto',
  templateUrl: './nieto.component.html',
  styles: []
})
export class NietoComponent implements OnInit {

  contadorNieto: number;

  // @Input() contadorNieto: number;
  // @Output() contadorCambio = new EventEmitter<number>();

  constructor( private store:Store<AppState>) { }

  ngOnInit() {
    this.store.select('contador').subscribe(contador=>{
      this.contadorNieto = contador;
      console.log('contador', contador);
    })
  }

  reset(){
    // this.contadorNieto = 0;
    // this.contadorCambio.emit(0);
    const accion = new ResetAction();

    this.store.dispatch(accion);

  }
}
