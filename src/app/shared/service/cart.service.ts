import { AppState } from './../../store/app.state';
import { Unicorn } from './../models/unicorn.model';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { filter, map, mergeMap } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import * as CartActions from './../../store/actions/cart.actions';
@Injectable({
  providedIn: 'root'
})
export class CartService {
  constructor(private store: Store<AppState>) {}

  cart$ = new BehaviorSubject<Unicorn[]>([]);

  public toggle(unicorn: Unicorn) {
    this.isPresent(unicorn).subscribe(isPresent => {
      if (isPresent) {
        this.removeFromCart(unicorn);
      } else {
        this.addToCart(unicorn);
      }
    });
  }

  private addToCart(unicorn: Unicorn) {
    this.store.dispatch(CartActions.addUnicornToCart({ unicorn }));
  }

  private removeFromCart(unicorn: Unicorn) {
    this.store.dispatch(CartActions.removeUnicornFromCart({ unicorn }));
  }

  public isPresent(unicorn: Unicorn): Observable<boolean> {
    return this.store
      .select('cart')
      .pipe(
        map(unicorns => unicorns.some(u => unicorn && u.id === unicorn.id))
      );
  }
}
