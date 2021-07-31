import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Myhttp1Component } from './myhttp1.component';

describe('Myhttp1Component', () => {
  let component: Myhttp1Component;
  let fixture: ComponentFixture<Myhttp1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Myhttp1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Myhttp1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
