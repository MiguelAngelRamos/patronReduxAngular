import { Action } from '@ngrx/store';

export const INCREMENTAR = '[Contador] Incrementar';
export const DECREMENTAR = '[Contador] Decrementar';
export const MULTIPLICAR = '[Contador] Multiplicar';
export const DIVIDIR = '[Contador] Dividir';
export const RESET = '[Contador] Reset';

export class IncrementarAction implements Action {
  // readonly solo lectura
  readonly type = INCREMENTAR;
}

export class DecrementarAction implements Action {
  // readonly solo lectura
  readonly type = DECREMENTAR;
}
export class MultiplicarAction implements Action {
  // readonly solo lectura
  readonly type = MULTIPLICAR;

  constructor( public payload:number){

  } 
}

export class DividirAction implements Action {
  // readonly solo lectura
  readonly type = DIVIDIR;

  constructor( public payload:number){

  } 
}

export class ResetAction implements Action {
  // readonly solo lectura
  readonly type = RESET;

}

export type actions = IncrementarAction | DecrementarAction | MultiplicarAction| DividirAction | ResetAction;