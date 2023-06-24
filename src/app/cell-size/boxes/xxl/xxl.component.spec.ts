import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XxlComponent } from './xxl.component';

describe('XxlComponent', () => {
  let component: XxlComponent;
  let fixture: ComponentFixture<XxlComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [XxlComponent]
    });
    fixture = TestBed.createComponent(XxlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
