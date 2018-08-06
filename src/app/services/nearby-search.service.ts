///<reference path="../../../node_modules/@types/googlemaps/index.d.ts" />

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, bindCallback, from } from 'rxjs';

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
      const request = {
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
          'reviews',
          'scope',
          'type',
          'url',
          'utc_offset',
          'vicinity',
          'website'
        ]
    };

    const promise = new Promise(function(resolve, reject) {
      // use getDetails method to retrieve Place data via the Place's place_id property
      searchService.getDetails(request, function(place, status) {
        if (status === google.maps.places.PlacesServiceStatus.OK) {
          // upon successful request resolve place
          resolve(place);
        } else {
          // else reject with status
          reject(status);
        }
      });
    });

    return from(promise);
  }
}
