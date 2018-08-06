///<reference path="../../../node_modules/@types/googlemaps/index.d.ts" />

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, bindCallback } from 'rxjs';

import { Results } from '../mock/mock-nearby-results';
import { APP_CONSTANTS } from '../utils/constants';

@Injectable({
  providedIn: 'root'
})
export class NearbySearchService {

  apiKey: string;
  private placeService: google.maps.places.PlacesService;

  constructor(private http: HttpClient) { 
    this.apiKey = APP_CONSTANTS.MapsApiKey;
  }

  getResults(): Observable<google.maps.places.PlaceResult[]> {
    return of(Results);
  }

  getDetail(placeId: string, searchService: google.maps.places.PlacesService): Observable<any> {
      var request = {
      placeId: placeId,
      fields: [
        'address_component',
        'adr_address',
        'alt_id',
        'formatted_address',
        'geometry',
        'icon',
        'id',
        'name',
        'permanently_closed',
        'photo',
        'place_id',
        'scope',
        'type',
        'url',
        'utc_offset',
        'vicinity'
      ]
    };

    const callback = (place, status) => {
      if (status === google.maps.places.PlacesServiceStatus.OK) {
        if (place) {
          return place;
        }
      }
    };

    let $getDetailsAsObservable : any;
    $getDetailsAsObservable = bindCallback(searchService.getDetails.bind(searchService), callback);
    return $getDetailsAsObservable(request);   
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
 
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
 
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }


}
