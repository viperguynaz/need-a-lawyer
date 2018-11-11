import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RCNavSwitch } from '../nav-switch/nav-switch'
import { HeaderComponent } from './header';
import { NavigationComponent } from '../navigation/navigation.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderComponent, RCNavSwitch, NavigationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
