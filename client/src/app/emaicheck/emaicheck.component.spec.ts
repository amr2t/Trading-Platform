import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmaicheckComponent } from './emaicheck.component';

describe('EmaicheckComponent', () => {
  let component: EmaicheckComponent;
  let fixture: ComponentFixture<EmaicheckComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmaicheckComponent]
    });
    fixture = TestBed.createComponent(EmaicheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
