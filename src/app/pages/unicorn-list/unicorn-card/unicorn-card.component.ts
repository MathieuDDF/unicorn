import { CartService } from '../../../shared/service/cart.service';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../../store/app.state';
import * as CartActions from '../../../store/actions/cart.actions';
import * as UnicornsActions from '../../../store/actions/unicorns.actions';
import { UnicornsService } from '../../../shared/service/unicorns.service';

@Component({
  selector: 'app-unicorn-card',
  templateUrl: './unicorn-card.component.html',
  styleUrls: ['./unicorn-card.component.scss']
})
export class UnicornCardComponent {
  constructor(private cartService: CartService,
    private store: Store<AppState>,
    private unicornsService: UnicornsService) { }

  @Input()
  public unicorn;

  @Output()
  private deleted = new EventEmitter();

  public liked = false;

  public delete() {
    this.unicornsService.delete(this.unicorn.id).subscribe(() => {
      this.store.dispatch(UnicornsActions.deleteUnicorn({ unicorn: this.unicorn }));
    });
  }

  public log(event: MouseEvent) {
    console.log(`y: ${event.clientY} | x: ${event.clientX}`);
  }

  public getColor() {
    return this.liked ? 'accent' : 'primary';
  }

  public toggleFavorite() {
    if (this.liked) {
      this.store.dispatch(CartActions.removeUnicornFromCart({ unicorn: this.unicorn }));
    } else {
      this.store.dispatch(CartActions.addUnicornToCart({ unicorn: this.unicorn }));
    }
    this.liked = !this.liked;
  }

}
