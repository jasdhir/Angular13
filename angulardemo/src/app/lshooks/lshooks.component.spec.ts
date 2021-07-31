import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LshooksComponent } from './lshooks.component';

describe('LshooksComponent', () => {
  let component: LshooksComponent;
  let fixture: ComponentFixture<LshooksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LshooksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LshooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
