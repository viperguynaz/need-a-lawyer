///<reference path="../../../../node_modules/@types/googlemaps/index.d.ts" />

import { Component, OnDestroy, OnInit, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { NearbySearchService } from '../../services/nearby-search.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit, OnDestroy {
  city: string;
  state: string;
  speciality: string; 
  description: string;
  results$: Observable<google.maps.places.PlaceResult[]>;
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

    this.description = "A bankruptcy lawyer’s primary focus is to assist clients through court proceedings to reduce or eliminate debt or to proceed forward with bankruptcy. A bankruptcy lawyer’s clients may be individuals or corporations. They may represent individual or corporate debtors, individual or corporate creditors, creditors' committees, and bankruptcy trustees. Work hours are long and meetings with clients frequently occur in the evenings or on weekends to accommodate their client’s schedule. Various environments serve as the bankruptcy lawyer’s workplace- from offices to courtrooms to law libraries.";
    this.routeParams = this.route.params.subscribe(params => {
      this.city = params['city'];
      this.state = params['state'];
      this.speciality = params['speciality'];
    });
    this.getResults();
  }

  ngOnDestroy() {
    this.routeParams.unsubscribe();
  }

  getResults(): void {
    const request: google.maps.places.PlaceSearchRequest = {
      location: new google.maps.LatLng(33.507441,-112.0109636),
      radius: 15000,
      keyword: this.speciality,
      type: 'lawyer'
    };

    this.results$ = this.search.getResults(request, this.searchService);
  }
}
