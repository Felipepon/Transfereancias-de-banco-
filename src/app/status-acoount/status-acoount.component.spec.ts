import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatusAcoountComponent } from './status-acoount.component';

describe('StatusAcoountComponent', () => {
  let component: StatusAcoountComponent;
  let fixture: ComponentFixture<StatusAcoountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatusAcoountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StatusAcoountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
