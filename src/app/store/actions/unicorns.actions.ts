import { Unicorn } from './../../shared/models/unicorn.model';
import { createAction, props } from '@ngrx/store';

export const setUnicorns = createAction(
  '[Unicorn] Set',
  props<{ unicorns: Unicorn[] }>()
);


export const deleteUnicorn = createAction(
  '[Unicorn] Delete',
  props<{ unicorn: Unicorn }>()
);

export const loadUnicorns = createAction(
  '[Unicorn] Load'
);
