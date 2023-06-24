import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XsComponent } from './xs.component';

describe('XsComponent', () => {
  let component: XsComponent;
  let fixture: ComponentFixture<XsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [XsComponent]
    });
    fixture = TestBed.createComponent(XsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
