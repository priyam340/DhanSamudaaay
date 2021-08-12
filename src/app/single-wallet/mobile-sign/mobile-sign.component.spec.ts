import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileSignComponent } from './mobile-sign.component';

describe('MobileSignComponent', () => {
  let component: MobileSignComponent;
  let fixture: ComponentFixture<MobileSignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MobileSignComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileSignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
