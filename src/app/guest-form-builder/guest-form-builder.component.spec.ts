import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuestFormBuilderComponent } from './guest-form-builder.component';

describe('GuestFormBuilderComponent', () => {
  let component: GuestFormBuilderComponent;
  let fixture: ComponentFixture<GuestFormBuilderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuestFormBuilderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuestFormBuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
