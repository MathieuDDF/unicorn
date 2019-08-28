import { Unicorn } from './../../shared/models/unicorn.model';
import { Observable } from 'rxjs';
import { UnicornsService } from './../../shared/service/unicorns.service';
import { Component } from '@angular/core';
import { AppState } from '../../store/app.state';
import { Store } from '@ngrx/store';
import * as UnicornActions from '../../store/actions/unicorns.actions';

@Component({
  selector: 'app-unicorn-list',
  templateUrl: './unicorn-list.component.html',
  styleUrls: ['./unicorn-list.component.scss']
})
export class UnicornListComponent {

  constructor(private unicornsService: UnicornsService,
    private store: Store<AppState>) {
    this.unicornsService.getAllWithCapacityLabels2().subscribe(
      unicorns => this.store.dispatch(UnicornActions.setUnicorn({ unicorns }))
    );
  }

  public unicorns$: Observable<Unicorn[]> = this.store.select('unicorns');
}
