import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HeaderComponent } from './components/header/header';
import { FooterComponent } from './components/footer/footer';
import { NavigationComponent } from './components/navigation/navigation.component';
import { RCNavSwitch } from './components/nav-switch/nav-switch';



describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        AppComponent,
        HeaderComponent,
        FooterComponent,
        NavigationComponent,
        RCNavSwitch
       ],
      imports: [ RouterTestingModule ]
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'app'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('app');
  }));

});
