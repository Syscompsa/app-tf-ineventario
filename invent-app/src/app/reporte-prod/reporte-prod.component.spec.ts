import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReporteProdComponent } from './reporte-prod.component';

describe('ReporteProdComponent', () => {
  let component: ReporteProdComponent;
  let fixture: ComponentFixture<ReporteProdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReporteProdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReporteProdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
