import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupidSignComponent } from './groupid-sign.component';

describe('GroupidSignComponent', () => {
  let component: GroupidSignComponent;
  let fixture: ComponentFixture<GroupidSignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GroupidSignComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupidSignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
