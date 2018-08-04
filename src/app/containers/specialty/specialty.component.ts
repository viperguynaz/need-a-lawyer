import { Component, OnInit, ViewChild } from '@angular/core';
import { GooglePlacesDirective } from '../../directives/google-places.directive';
import { Address } from '../../models/address';

@Component({
  selector: 'app-specialty',
  templateUrl: './specialty.component.html',
  styleUrls: ['./specialty.component.scss']
})
export class SpecialtyComponent implements OnInit {

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

}
