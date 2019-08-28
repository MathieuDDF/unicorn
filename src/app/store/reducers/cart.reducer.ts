import { filter } from 'rxjs/operators';
import { createReducer, on } from '@ngrx/store';
import { Unicorn } from 'src/app/shared/models/unicorn.model';
import * as CartActions from '../actions/cart.actions';
import * as UnicornActions from '../actions/unicorns.actions';

export const initialState: Unicorn[] = [];

export const cartReducer = createReducer(
  initialState,
  on(CartActions.addUnicornToCart, (state, action) => state.concat(action.unicorn) ),
  on(CartActions.removeUnicornFromCart, (state, action) => state.filter(u => u.id !== action.unicorn.id) ),
  on(UnicornActions.deleteUnicorn, (state, action) => state.filter(u => u.id !== action.unicorn.id))
);
