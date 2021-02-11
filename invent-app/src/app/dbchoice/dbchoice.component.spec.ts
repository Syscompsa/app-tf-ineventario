import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DbchoiceComponent } from './dbchoice.component';

describe('DbchoiceComponent', () => {
  let component: DbchoiceComponent;
  let fixture: ComponentFixture<DbchoiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DbchoiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DbchoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
