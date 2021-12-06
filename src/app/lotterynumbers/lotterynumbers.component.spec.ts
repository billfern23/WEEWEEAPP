import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LotterynumbersComponent } from './lotterynumbers.component';

describe('LotterynumbersComponent', () => {
  let component: LotterynumbersComponent;
  let fixture: ComponentFixture<LotterynumbersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LotterynumbersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LotterynumbersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
