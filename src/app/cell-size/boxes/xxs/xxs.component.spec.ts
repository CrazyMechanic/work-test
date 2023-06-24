import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XxsComponent } from './xxs.component';

describe('XxsComponent', () => {
  let component: XxsComponent;
  let fixture: ComponentFixture<XxsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [XxsComponent]
    });
    fixture = TestBed.createComponent(XxsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
