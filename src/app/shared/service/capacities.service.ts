import { HttpClient } from '@angular/common/http';
import { Capacity } from './../models/capacity.model';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CapacitiesService {
  constructor(private http: HttpClient) {}
  public getCapacityLabel(id): Observable<Capacity> {
    return this.http.get<Capacity>(`http://localhost:3000/capacities/${id}`);
  }
  public getCapacities(): Observable<Capacity[]> {
    return this.http.get<Capacity[]>(`http://localhost:3000/capacities`);
  }
}
