import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { of } from 'rxjs';

import { DetailComponent } from './detail.component';

describe('DetailComponent', () => {
  let component: DetailComponent;
  let fixture: ComponentFixture<DetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailComponent ],
      imports: [HttpClientModule],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            params: of({
              city: 'phoenix', 
              state: 'arizona', 
              speciality: 'bankruptcy',
              id: "abc"
            })
          }
        }
      ]

    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });

  // it('should retrieve city parameter', () => {
  //   expect(component.city).toEqual('phoenix');
  // });

  // it('should retrieve state parameter', () => {
  //   expect(component.state).toEqual('arizona');
  // });

  // it('should retrieve speciality parameter', () => {
  //   expect(component.speciality).toEqual('bankruptcy');
  // });

  // it('should retrieve speciality parameter', () => {
  //   expect(component.id).toEqual('abc');
  // });
});
