import { CapacitiesService } from './capacities.service';
import { Capacity } from './../models/capacity.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, from, forkJoin, BehaviorSubject } from 'rxjs';
import { flatMap, mergeMap, map, toArray, pluck } from 'rxjs/operators';
import { Unicorn } from '../models/unicorn.model';

@Injectable({
  providedIn: 'root'
})
export class UnicornsService {
  constructor(
    private http: HttpClient,
    private capacitiesService: CapacitiesService
  ) {}

  public getUnicorns(): Observable<Unicorn[]> {
    return this.http.get<Unicorn[]>('http://localhost:3000/unicorns');
  }

  public delete(id) {
    return this.http.delete(`http://localhost:3000/unicorns/${id}`);
  }

  public getAllWithCapacityLabels(): Observable<Unicorn[]> {
    return this.getUnicorns().pipe(
      flatMap(e => e),
      mergeMap(
        (unicorn: Unicorn): Observable<Unicorn> => {
          console.log(unicorn);
          return from(unicorn.capacities).pipe(
            mergeMap((capacityId: number) => {
              return this.capacitiesService.getCapacityLabel(capacityId);
            }),
            pluck('label'),
            toArray(),
            map((capacitiesLabels: string[]) => ({
              ...unicorn,
              capacitiesLabels
            }))
          );
        }
      ),
      toArray()
    );
  }

  public getAllWithCapacityLabels2(): Observable<Unicorn[]> {
    return forkJoin([
      this.getUnicorns(),
      this.capacitiesService.getCapacities()
    ]).pipe(
      map(([unicors, capacities]): Unicorn[] => {
        const capacitiesObj = this.reduceCapacities(capacities);
        return unicors.map(unicorn => {
          const capacitiesLabels = unicorn.capacities.map(
            (c: number) => capacitiesObj[c].label
          );
          return { ...unicorn, capacitiesLabels };
        });
      })
    );
  }

  private reduceCapacities(capacities: Capacity[]) {
    return capacities.reduce((acc, value) => {
      if (!acc) {
        acc = {};
      }
      acc[value.id] = value;
      return acc;
    }, {});
  }
}
