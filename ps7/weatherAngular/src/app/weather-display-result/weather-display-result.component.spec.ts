import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherDisplayResultComponent } from './weather-display-result.component';

describe('WeatherDisplayResultComponent', () => {
  let component: WeatherDisplayResultComponent;
  let fixture: ComponentFixture<WeatherDisplayResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeatherDisplayResultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherDisplayResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
