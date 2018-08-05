///<reference path="../../../../node_modules/@types/googlemaps/index.d.ts" />

import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { APP_CONSTANTS } from '../../utils/constants';
import { NearbySearchService } from '../../services/nearby-search.service';
import { IPlaceResponse } from '../../interfaces/iPlaceResponse'

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnDestroy, OnInit {
  city: string;
  state: string;
  speciality: string; 
  id: string;
  apiKey: string;
  maxWidth: number;

  result: google.maps.places.PlaceResult;
  private sub: any;

  constructor(private route: ActivatedRoute, private search: NearbySearchService) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.city = params['city'];
      this.state = params['state'];
      this.speciality = params['speciality'];
      this.id = params['id'];
      this.apiKey = APP_CONSTANTS.MapsApiKey;
    });

    this.maxWidth = 400;
    this.getDetail(this.id);
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  getDetail(placeId: string): void {
    this.search.getDetail(placeId).subscribe(result => this.result = result.Place);
  }

}
