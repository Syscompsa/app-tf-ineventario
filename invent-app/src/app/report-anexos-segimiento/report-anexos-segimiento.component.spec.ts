import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportAnexosSegimientoComponent } from './report-anexos-segimiento.component';

describe('ReportAnexosSegimientoComponent', () => {
  let component: ReportAnexosSegimientoComponent;
  let fixture: ComponentFixture<ReportAnexosSegimientoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportAnexosSegimientoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportAnexosSegimientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
