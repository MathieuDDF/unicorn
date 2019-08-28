import { Unicorn } from './../../shared/models/unicorn.model';
import { createAction, props } from '@ngrx/store';

export const addUnicornToCart = createAction(
  '[Unicorn] Add',
  props<{ unicorn: Unicorn }>()
);


export const removeUnicornFromCart = createAction(
  '[Unicorn] Remove',
  props<{ unicorn: Unicorn }>()
);
