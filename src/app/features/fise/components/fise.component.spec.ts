import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FiseComponent } from './fise.component';

describe('FiseComponent', () => {
  let component: FiseComponent;
  let fixture: ComponentFixture<FiseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FiseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
