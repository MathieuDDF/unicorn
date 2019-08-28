import { Unicorn } from './../../../shared/models/unicorn.model';
import { CartService } from './../../../shared/service/cart.service';
import { Component, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-unicorn-card',
  templateUrl: './unicorn-card.component.html',
  styleUrls: ['./unicorn-card.component.scss']
})
export class UnicornCardComponent {
  constructor(private cartService: CartService) {}


  @Input()
  public unicorn;

  @Output()
  private deleted = new EventEmitter();

  isPresent$ = this.cartService.isPresent(this.unicorn);
  /**
   * delete
   */
  public delete() {
    this.deleted.emit();
  }

  public log(event: MouseEvent) {
    console.log(`y: ${event.clientY} | x: ${event.clientX}`);
  }

  public getColor() {
    return this.cartService.isPresent(this.unicorn) ? 'accent' : 'primary';
  }
  public toogleFavorite() {
    this.cartService.toogle(this.unicorn);
    this.isPresent$ = this.cartService.isPresent(this.unicorn);
  }

}
