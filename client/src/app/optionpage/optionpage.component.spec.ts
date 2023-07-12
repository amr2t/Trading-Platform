import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OptionpageComponent } from './optionpage.component';

describe('OptionpageComponent', () => {
  let component: OptionpageComponent;
  let fixture: ComponentFixture<OptionpageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OptionpageComponent]
    });
    fixture = TestBed.createComponent(OptionpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
