import { addUnicornToCart } from './../actions/cart.actions';
import { createReducer, on } from '@ngrx/store';
import { Unicorn } from 'src/app/shared/models/unicorn.model';
import { filter } from 'rxjs/operators';
import * as CartActions from '../actions/cart.actions';
import * as UnicornActions from '../actions/unicorns.actions';

export const initialState: Unicorn[] = [];

export const unicornsReducer = createReducer(
  initialState,
  on(UnicornActions.deleteUnicorn, (state, action) => state.filter(u => u.id !== action.unicorn.id)),
  on(UnicornActions.setUnicorns, (state, action) => action.unicorns)
);
