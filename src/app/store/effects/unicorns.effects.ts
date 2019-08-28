
import { Injectable } from '@angular/core';
import { exhaustMap, map } from 'rxjs/operators';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as UnicornActions from '../../store/actions/unicorns.actions';
import { UnicornsService } from '../../shared/service/unicorns.service';

@Injectable()
export class UnicornsEffects {

  constructor(private actions$: Actions,
    private unicornsService: UnicornsService) {
  }

  $loadUnicorns = createEffect(() => this.actions$.pipe(
    ofType(UnicornActions.loadUnicorns),
    exhaustMap(action => {
      return this.unicornsService.getAllWithCapacityLabels2().pipe(
        map(unicorns => UnicornActions.setUnicorns({ unicorns })),
      );
    }
    )
  ));

}
