///<reference path="../../../../node_modules/@types/googlemaps/index.d.ts" />

import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { GooglePlacesDirective } from '../../directives/google-places.directive';
import { StringHelpers as stringHelper }  from '../../utils/string-helpers';

@Component({
  selector: 'app-home',
  templateUrl: './home.html',
  styleUrls: ['./home.scss']
})
export class HomeComponent implements OnInit {
  public buttonText = 'Find A Lawyer';
  public buttonLink = ''; // TODO: link helper;


  city: string;
  state: string;
  speciality: string;

  @ViewChild("placesRef") placesRef : GooglePlacesDirective;

  constructor(private router: Router) { }

  ngOnInit() {
    this.resultsLink();
  }

  public resultsLink() {
    this.buttonLink = `${this.state}/${this.city}/${this.speciality}/lawyers`;
  }

  public handleAddressChange(place: google.maps.places.PlaceResult) {
    this.state = this.getState(place).toLowerCase();
    this.city = this.getCity(place).toLowerCase();
    if (this.speciality) {
      const citySlug = stringHelper.slug(this.city.toLowerCase());
      const stateSlug = stringHelper.slug(this.state.toLowerCase());
      this.router.navigateByUrl(`/${citySlug}/${stateSlug}/${this.speciality}/lawyers`);
      this.resultsLink();
    }
  }

  public handleSpecialtyChange(speacilty: string) {
    this.speciality = speacilty;
    if (this.city && this.state) {
      const citySlug = stringHelper.slug(this.city.toLowerCase());
      const stateSlug = stringHelper.slug(this.state.toLowerCase());
      this.router.navigateByUrl(`/${citySlug}/${stateSlug}/${this.speciality}/lawyers`);
      this.resultsLink();
    }
  }

  private getState(place: google.maps.places.PlaceResult): string {
    const components = place.address_components;
    const results = components.filter(a => a.types.includes('administrative_area_level_1')).map(s => s.long_name);
    if (results.length > 0) {
      return results[0];
    }

    return null;
  }

  private getCity(place: google.maps.places.PlaceResult): string {
    const components = place.address_components;
    const results = components.filter(a => a.types.includes('locality')).map(s => s.long_name);
    if (results.length > 0) {
      return results[0];
    }

    return null;
  }

}
