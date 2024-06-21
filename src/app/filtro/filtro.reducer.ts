import { Action, createReducer, on } from '@ngrx/store';
import { setFiltro, filtrosValidos } from './filtro.actions';

export const initialstate: filtrosValidos = 'todos';

const _filtroReducer = createReducer<filtrosValidos, Action>(
  initialstate,
  on(setFiltro, (state, { filtro }) => filtro)
);

export function filtroReducer(
  state: filtrosValidos | undefined,
  action: Action
) {
  return _filtroReducer(state, action);
}
