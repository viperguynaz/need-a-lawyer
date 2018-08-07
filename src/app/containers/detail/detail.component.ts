///<reference path="../../../../node_modules/@types/googlemaps/index.d.ts" />

import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { APP_CONSTANTS } from '../../utils/constants';
import { NearbySearchService } from '../../services/nearby-search.service';
import { IPlacesDetailResponse } from '../../interfaces/iPlacesDetailResponse';
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
  maxWidth: number;

  response$: Observable<IPlacesDetailResponse>;
  routeParams$: Observable<{ [key: string]: any; }>;
  private routeParams: any;
  private map: google.maps.Map;
  private searchService: google.maps.places.PlacesService;

  @ViewChild('gmap') gmapElement: any;

  constructor(private el: ElementRef, private route: ActivatedRoute, private search: NearbySearchService) { }

  ngOnInit() {
    const mapProp = {
      center: new google.maps.LatLng(33.507441,-112.0109636),
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    this.map = new google.maps.Map(this.gmapElement.nativeElement, mapProp);
    this.searchService = new google.maps.places.PlacesService(this.map);

    this.routeParams = this.route.params.subscribe(params => {
      this.city = params['city'];
      this.state = params['state'];
      this.speciality = params['speciality'];
      this.id = params['id'];
    });

    this.maxWidth = 400;
    this.getDetail(this.id);
  }

  ngOnDestroy() {
    this.routeParams.unsubscribe();
  }

  getDetail(placeId: string): void {
    this.response$ = this.search.getDetail(placeId, this.searchService);
  }

}
