import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RCNavSwitch } from './nav-switch';

describe('NavSwitch Component', () => {
  let component: RCNavSwitch;
  let fixture: ComponentFixture<RCNavSwitch>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RCNavSwitch ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RCNavSwitch);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
