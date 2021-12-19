import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TenDaysComponent } from './ten-days.component';

describe('TenDaysComponent', () => {
  let component: TenDaysComponent;
  let fixture: ComponentFixture<TenDaysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TenDaysComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TenDaysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
