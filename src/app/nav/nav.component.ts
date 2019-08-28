import { AppState } from './../store/app.state';
import { CartService } from './../shared/service/cart.service';
import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, share, count } from 'rxjs/operators';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {
  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      share()
    );

  public cart$ = this.store.select('cart');

  constructor(
    private breakpointObserver: BreakpointObserver,
    private store: Store<AppState>
  ) {}
}
