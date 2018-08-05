///<reference path="../../../node_modules/@types/googlemaps/index.d.ts" />

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { Results } from '../mock/mock-nearby-results';
import { catchError, map, tap } from 'rxjs/operators';
import { APP_CONSTANTS } from '../utils/constants';
import { IPlaceResponse } from '../interfaces/iPlaceResponse'

@Injectable({
  providedIn: 'root'
})
export class NearbySearchService {

  apiKey: string;
  
  constructor(private http: HttpClient) { 
    this.apiKey = APP_CONSTANTS.MapsApiKey;
  }

  getResults(): Observable<google.maps.places.PlaceResult[]> {
    return of(Results);
  }

  getDetail(placeId: string): Observable<IPlaceResponse> {
    //const url = "https://google.com";
    const url = `https://maps.googleapis.com/maps/api/place/details/json?placeid=${placeId}&fields=address_component,adr_address,alt_id,formatted_address,geometry,icon,id,name,permanently_closed,photo,place_id,scope,type,url,utc_offset,vicinity&key=${this.apiKey}`;
    console.log(url);

    return this.http.get<IPlaceResponse>(url).pipe(
      tap(_ => console.log(`fetched detail id=${placeId}`)),
      catchError(this.handleError<IPlaceResponse>(`getDetail id=${placeId}`)));
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
