import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirDem0Component } from './dir-dem0.component';

describe('DirDem0Component', () => {
  let component: DirDem0Component;
  let fixture: ComponentFixture<DirDem0Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DirDem0Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DirDem0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
