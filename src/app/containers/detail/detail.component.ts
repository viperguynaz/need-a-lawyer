///<reference path="../../../../node_modules/@types/googlemaps/index.d.ts" />

import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { APP_CONSTANTS } from '../../utils/constants';
import { NearbySearchService } from '../../services/nearby-search.service';
import { IPlaceResponse } from '../../interfaces/iPlaceResponse';
import { Observable } from 'rxjs';

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

  result$: Observable<google.maps.places.PlaceResult>;
  routeParams$: Observable<{ [key: string]: any; }>;
  private sub: any;
  private map: google.maps.Map;
  private searchService: google.maps.places.PlacesService;

  @ViewChild('gmap') gmapElement: any;

  constructor(private el: ElementRef, private route: ActivatedRoute, private search: NearbySearchService) { }

  ngOnInit() {
    this.apiKey = APP_CONSTANTS.MapsApiKey;
    const mapProp = {
      center: new google.maps.LatLng(18.5793, 73.8143),
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    this.map = new google.maps.Map(this.gmapElement.nativeElement, mapProp);
    this.searchService = new google.maps.places.PlacesService(this.map);

    this.sub = this.route.params.subscribe(params => {
      this.city = params['city'];
      this.state = params['state'];
      this.speciality = params['speciality'];
      this.id = params['id'];
    });

    this.maxWidth = 400;
    this.getDetail(this.id);
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  getDetail(placeId: string): void {
    this.result$ = this.search.getDetail(placeId, this.searchService);
  }

}
