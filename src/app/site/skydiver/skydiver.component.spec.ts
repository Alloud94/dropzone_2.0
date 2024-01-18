import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkydiverComponent } from './skydiver.component';

describe('SkydiverComponent', () => {
  let component: SkydiverComponent;
  let fixture: ComponentFixture<SkydiverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkydiverComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkydiverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
