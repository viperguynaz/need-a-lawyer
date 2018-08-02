import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ToSlugPipe } from '../../pipes/to-slug.pipe';
import { SpecialtySelectComponent } from './specialty-select.component';

describe('SpecialtySelectComponent', () => {
  let component: SpecialtySelectComponent;
  let fixture: ComponentFixture<SpecialtySelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpecialtySelectComponent, ToSlugPipe ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecialtySelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
