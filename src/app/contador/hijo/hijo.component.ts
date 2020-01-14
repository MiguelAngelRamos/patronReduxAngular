import { Component, OnInit} from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducers';
import { MultiplicarAction, DividirAction } from '../contador.accion';


@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styles: []
})
export class HijoComponent implements OnInit {

  contadorHijo:number;
  // @Input() contadorHijo: number;
  // @Output() cambioContador = new EventEmitter<number>();
  constructor( private store:Store<AppState>) { }

  ngOnInit() {
    this.store.select('contador').subscribe(contador=>{
      this.contadorHijo = contador;
      console.log('contador', contador);
    })
  }

  multiplicar(){
    //this.contadorHijo *=2;
    // this.cambioContador.emit(this.contadorHijo);
    const accion = new MultiplicarAction(5);
    this.store.dispatch(accion);
  }

  dividir(){
    const accion = new DividirAction(5);
    // this.contadorHijo /=2;
    // this.cambioContador.emit(this.contadorHijo);
    this.store.dispatch(accion);
  }

  resetNieto(event){
    this.contadorHijo = event;
    // this.cambioContador.emit(this.contadorHijo);
  }

}
