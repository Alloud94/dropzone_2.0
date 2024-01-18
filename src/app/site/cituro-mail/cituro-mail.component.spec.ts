import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CituroMailComponent } from './cituro-mail.component';

describe('CituroMailComponent', () => {
  let component: CituroMailComponent;
  let fixture: ComponentFixture<CituroMailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CituroMailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CituroMailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
