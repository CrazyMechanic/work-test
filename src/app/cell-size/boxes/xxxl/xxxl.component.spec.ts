import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XxxlComponent } from './xxxl.component';

describe('XxxlComponent', () => {
  let component: XxxlComponent;
  let fixture: ComponentFixture<XxxlComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [XxxlComponent]
    });
    fixture = TestBed.createComponent(XxxlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
