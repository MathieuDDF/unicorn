import { Unicorn } from './../models/unicorn.model';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { filter, map, mergeMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  constructor() {}

  selectedUnicorns$ = new BehaviorSubject<Unicorn[]>([]);

  public toogle(unicorn: Unicorn) {
    const newTab: Unicorn[] = this.isPresent(unicorn)
      ? this.selectedUnicorns$.value.filter(u => u.id !== unicorn.id)
      : [...this.selectedUnicorns$.value, unicorn];
    this.selectedUnicorns$.next(newTab);
  }

  public isPresent(unicorn: Unicorn): boolean {
    return this.selectedUnicorns$
        .getValue()
        .some(u => unicorn && u.id === unicorn.id);
  }
}
