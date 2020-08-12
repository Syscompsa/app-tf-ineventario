import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryQRComponent } from './history-qr.component';

describe('HistoryQRComponent', () => {
  let component: HistoryQRComponent;
  let fixture: ComponentFixture<HistoryQRComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistoryQRComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoryQRComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
