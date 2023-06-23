import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CellSizeComponent } from './cell-size.component';

describe('CellSizeComponent', () => {
  let component: CellSizeComponent;
  let fixture: ComponentFixture<CellSizeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CellSizeComponent]
    });
    fixture = TestBed.createComponent(CellSizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
