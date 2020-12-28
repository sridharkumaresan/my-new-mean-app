import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeToggleSwitchComponent } from './type-toggle-switch.component';

describe('TypeToggleSwitchComponent', () => {
  let component: TypeToggleSwitchComponent;
  let fixture: ComponentFixture<TypeToggleSwitchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TypeToggleSwitchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeToggleSwitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
