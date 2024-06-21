import { Action, createReducer, on } from '@ngrx/store';
import * as actions from './todo.actions';
import { Todo } from './models/todo.model';

export const estadoInicial: Todo[] = [
  new Todo('Salvar al mundo'),
  new Todo('Bienvenido'),
  new Todo('adios'),
];

const _todoReducer = createReducer(
  estadoInicial,
  on(actions.crear, (state, { texto }) => [...state, new Todo(texto)]),
  on(actions.limpiarCompletados, (state) =>
    state.filter((todo) => !todo.completado)
  ),
  on(actions.toggleAll, (state, { completado }) =>
    state.map((todo) => {
      return { ...todo, completado };
    })
  ),

  on(actions.borrar, (state, { id }) => state.filter((todo) => todo.id !== id)),
  on(actions.toggle, (state, { id }) => {
    return state.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          completado: !todo.completado,
        };
      } else {
        return todo;
      }
    });
  }),
  on(actions.editar, (state, { id, texto }) => {
    return state.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          texto: texto,
        };
      } else {
        return todo;
      }
    });
  })
);

export function todoReducer(state: Todo[] | undefined, action: Action): Todo[] {
  return _todoReducer(state, action);
}
