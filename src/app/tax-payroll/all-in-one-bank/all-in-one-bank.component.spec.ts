import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllInOneBankComponent } from './all-in-one-bank.component';

describe('AllInOneBankComponent', () => {
  let component: AllInOneBankComponent;
  let fixture: ComponentFixture<AllInOneBankComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllInOneBankComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllInOneBankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
