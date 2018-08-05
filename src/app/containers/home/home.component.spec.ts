///<reference path="../../../../node_modules/@types/googlemaps/index.d.ts" />

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeComponent } from './home.component';
import { GooglePlacesDirective } from '../../directives/google-places.directive';
import { SpecialtySelectComponent } from '../../components/specialty-select/specialty-select.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  // window['google'] = {
  //   maps: {
  //     Maps: () => { },
  //     places: { 
  //       Autocomplete: class {
  //         addListener: () => { }
  //       }
  //     }
  //   }
  // };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        GooglePlacesDirective,
        HomeComponent,
        SpecialtySelectComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
