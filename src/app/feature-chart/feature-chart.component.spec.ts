import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureChartComponent } from './feature-chart.component';

describe('FeatureChartComponent', () => {
  let component: FeatureChartComponent;
  let fixture: ComponentFixture<FeatureChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeatureChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeatureChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
