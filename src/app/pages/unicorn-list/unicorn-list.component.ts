import { Unicorn } from './../../shared/models/unicorn.model';
import { Observable } from 'rxjs';
import { UnicornsService } from './../../shared/service/unicorns.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-unicorn-list',
  templateUrl: './unicorn-list.component.html',
  styleUrls: ['./unicorn-list.component.scss']
})
export class UnicornListComponent {
  public unicorns$: Observable<Unicorn[]> = this.unicornsService.getAllWithCapacityLabels2();
  constructor(private unicornsService: UnicornsService) { }

}
