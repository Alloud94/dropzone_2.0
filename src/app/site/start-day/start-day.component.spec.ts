import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StartDayComponent } from './start-day.component';

describe('StartDayComponent', () => {
  let component: StartDayComponent;
  let fixture: ComponentFixture<StartDayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StartDayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StartDayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
