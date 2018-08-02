///<reference path="../../../../node_modules/@types/googlemaps/index.d.ts" />

import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { NearbySearchService } from '../../services/nearby-search.service';

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
  results: google.maps.places.PlaceResult[];
  private sub: any;

  constructor(private route: ActivatedRoute, private search: NearbySearchService) { }

  ngOnInit() {
    this.description = "A bankruptcy lawyer’s primary focus is to assist clients through court proceedings to reduce or eliminate debt or to proceed forward with bankruptcy. A bankruptcy lawyer’s clients may be individuals or corporations. They may represent individual or corporate debtors, individual or corporate creditors, creditors' committees, and bankruptcy trustees. Work hours are long and meetings with clients frequently occur in the evenings or on weekends to accommodate their client’s schedule. Various environments serve as the bankruptcy lawyer’s workplace- from offices to courtrooms to law libraries.";
    this.sub = this.route.params.subscribe(params => {
      this.city = params['city'];
      this.state = params['state'];
      this.speciality = params['speciality'];
    });
    this.getResults();
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  getResults(): void {
    this.search.getResults().subscribe(results => this.results = results);
  }

}
