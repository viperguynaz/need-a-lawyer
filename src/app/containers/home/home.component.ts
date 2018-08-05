import { Component, OnInit, ViewChild } from '@angular/core';
import { GooglePlacesDirective } from '../../directives/google-places.directive';
import { Address } from '../../models/address';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  @ViewChild("placesRef") placesRef : GooglePlacesDirective;

  constructor() { }

  ngOnInit() {
  }

  public handleAddressChange(address: Address) {
    console.log(address.name);
    console.log(address.geometry.location.lng());
    console.log(address.geometry.location.lat());
    console.log(address.geometry.location.toJSON());
    console.log(address.geometry.viewport.getNorthEast());
  }

  public handleSpecialtyChange(speacilty: String) {
    console.log("specialty: " + speacilty);
  }

}
