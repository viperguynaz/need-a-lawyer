///<reference path="../../../node_modules/@types/googlemaps/index.d.ts" />

import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Results } from '../mock/mock-nearby-results';
import { Result } from '../mock/mock-place-detail';

@Injectable({
  providedIn: 'root'
})
export class NearbySearchService {

  constructor() { }

  getResults(): Observable<google.maps.places.PlaceResult[]> {
    return of(Results);
  }

  getDetail(placeId: string): Observable<google.maps.places.PlaceResult> {
    return of(Result);
  }

}
